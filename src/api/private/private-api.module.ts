/*
 * SPDX-FileCopyrightText: 2021 The HedgeDoc developers (see AUTHORS file)
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */

import { Module } from '@nestjs/common';
import { UsersModule } from '../../users/users.module';
import { TokensController } from './tokens/tokens.controller';
import { LoggerModule } from '../../logger/logger.module';

@Module({
  imports: [UsersModule, LoggerModule],
  controllers: [TokensController],
})
export class PrivateApiModule {}
