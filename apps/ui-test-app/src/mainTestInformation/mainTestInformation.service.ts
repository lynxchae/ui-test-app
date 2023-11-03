import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MainTestInformationServiceBase } from "./base/mainTestInformation.service.base";

@Injectable()
export class MainTestInformationService extends MainTestInformationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
