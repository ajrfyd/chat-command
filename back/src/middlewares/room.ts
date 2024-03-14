import { MiddlewareFnType } from "../types/common";
import db from "../db/models/index.js";
import { Op } from "sequelize";
import { v4 } from "uuid";

export const searchRoom: MiddlewareFnType = async (req, res, next) => {
  const { id } = req.user;
  const { roomType } = req.params;
  const room = await db.Room.findOrCreate({
    where: {
      ownerId: id,
      deletedAt: {
        [Op.eq]: null,
      },
      purposeType: roomType,
    },
    defaults: {
      roomId: `r-${v4()}`,
      currentState: "A",
      roomType: "B",
      purposeType: roomType,
      ownerId: id,
      userLimit: 2,
      deletedAt: null,
    },
  });
  req.room = room[0].dataValues;
  next();
};
