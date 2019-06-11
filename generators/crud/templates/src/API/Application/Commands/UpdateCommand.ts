import { Command } from 'simple-command-bus';
import * as _ from 'lodash';

export default class Update<%= options.model %>Command extends Command {
  private id;

  constructor(body : Object) {
    super();
    _.assign(this, body);
  }

  getId(){
    return this.id;
  }

}
