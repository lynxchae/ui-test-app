import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MainTestInformationService } from "./mainTestInformation.service";
import { MainTestInformationControllerBase } from "./base/mainTestInformation.controller.base";

@swagger.ApiTags("mainTestInformations")
@common.Controller("mainTestInformations")
export class MainTestInformationController extends MainTestInformationControllerBase {
  constructor(protected readonly service: MainTestInformationService) {
    super(service);
  }
}
