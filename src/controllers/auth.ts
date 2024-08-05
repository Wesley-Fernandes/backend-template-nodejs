import { Request, Response } from "express";
import { userSchema, userLoginSchema } from "../schema/user";
import { decript, encript, genToken } from "../utils/criptografy";
import database from "../config/database";

export class Auth {
  async create(req: Request, res: Response) {
    const user = userSchema.parse(req.body);
    const hashedPassword = encript(user.password);
    await database.user.create({
      data: {
        email: user.email,
        password: hashedPassword,
        username: user.username,
        birth: user.birth,
      },
    });

    return res.status(201).json({ message: "Account has been created." });
  }

  async login(req: Request, res: Response) {
    try {
      const user = userLoginSchema.parse(req.body);
      const found = await database.user.findUnique({
        where: { email: user.email },
        select: { id: true, password: true },
      });
      if (!found)
        return res.status(404).json({ message: "Usuário não existe." });
      if (decript(user.password, found.password)) {
        res.setHeader("authorization", genToken(found.id));
        return res.status(200).json({ message: "Login efetuado com sucesso." });
      }
      return res.status(404).json({ message: "Dados invalidos." });
    } catch (error) {
      return res.status(500).json({ message: "Erro interno do servidor." });
    }
  }
}
