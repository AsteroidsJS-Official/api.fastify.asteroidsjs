import { BaseDto } from '../../common/shared/base.dto'

import { IsDefined, IsNumber } from 'class-validator'

export class ColliderDto extends BaseDto {
  @IsDefined({ message: 'It is required to send the type' })
  @IsNumber()
  type: number

  @IsDefined({ message: 'It is required to send the localPositionX' })
  @IsNumber()
  localPositionX: number

  @IsDefined({ message: 'It is required to send the localPositionY' })
  @IsNumber()
  localPositionY: number

  @IsDefined({ message: 'It is required to send the radius' })
  @IsNumber()
  radius: number
}
