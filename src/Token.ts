import { Abstract, Type } from '@nestjs/common'

export type Token = string | symbol | Type<any> | Abstract<any> | Function
