import { ReqRescheduleBodyDTO, ScheduleInfoDTO } from "@rfjs/common";
import { ScheduleRegistry } from "@rfjs/helpers";
import { ApiUtil } from "@rfjs/utils";
import { Body, Get, JsonController, Post } from "routing-controllers";
import { injectable } from "tsyringe";

@injectable()
@JsonController('/schedules')
export class ScheduleController {

  @Get()
  @ApiUtil.ApiResDataListSchema(ScheduleInfoDTO)
  async getAllSchedules() {
    const schedules = ScheduleRegistry.getAllSchedulesInfoDTO();
    return ApiUtil.apiResData(schedules);
  }

  @Post('/reschedule')
  @ApiUtil.ApiResDataSchema(ScheduleInfoDTO)
  async reschedule(
    @Body() body: ReqRescheduleBodyDTO,
  ) {
    const reschedule = ScheduleRegistry.reschedule(body.name, body);
    const data = ScheduleRegistry.getSchedulesInfoDTO(reschedule.name);
    return ApiUtil.apiResData(data);
  }
}
