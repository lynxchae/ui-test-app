import * as graphql from "@nestjs/graphql";
import { MainTestInformationResolverBase } from "./base/mainTestInformation.resolver.base";
import { MainTestInformation } from "./base/MainTestInformation";
import { MainTestInformationService } from "./mainTestInformation.service";

@graphql.Resolver(() => MainTestInformation)
export class MainTestInformationResolver extends MainTestInformationResolverBase {
  constructor(protected readonly service: MainTestInformationService) {
    super(service);
  }
}
