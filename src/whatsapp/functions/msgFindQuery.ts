/*!
 * Copyright 2021 WPPConnect Team
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Wid } from '..';
import { exportModule } from '../exportModule';
import { ModelPropertiesContructor, MsgModel } from '../models';

export interface MsgFindQueryParams {
  count: number;
  direction: 'after' | 'before';
  remote: Wid;
  fromMe?: boolean;
  id?: string;
  participant?: any;
}

/** @whatsapp 2.2149.4:2495 */
export declare function msgFindQuery(
  direction: 'after' | 'before',
  params: MsgFindQueryParams
): Promise<ModelPropertiesContructor<MsgModel>[]>;

exportModule(
  exports,
  {
    msgFindQuery: 'msgFindQuery',
  },
  (m) => m.msgFindQuery && m.msgFindByIds
);