import { BaseController, Controller, Get, Post } from '@universal-packages/express-controllers'
import { UseParameters } from '../../src'

@Controller('good')
export default class GoodController extends BaseController {
  @Get(':id')
  @UseParameters('separate')
  public async getEnd(): Promise<void> {
    this.json({ subject: this.request.parameters.subject })
  }

  @Post(':id')
  public async postEnd(): Promise<void> {
    this.json({ subject: this.request.parameters.subject })
  }
}
