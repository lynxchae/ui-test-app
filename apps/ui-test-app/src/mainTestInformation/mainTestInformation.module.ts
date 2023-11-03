import { Module } from "@nestjs/common";
import { MainTestInformationModuleBase } from "./base/mainTestInformation.module.base";
import { MainTestInformationService } from "./mainTestInformation.service";
import { MainTestInformationController } from "./mainTestInformation.controller";
import { MainTestInformationResolver } from "./mainTestInformation.resolver";

@Module({
  imports: [MainTestInformationModuleBase],
  controllers: [MainTestInformationController],
  providers: [MainTestInformationService, MainTestInformationResolver],
  exports: [MainTestInformationService],
})
export class MainTestInformationModule {}
