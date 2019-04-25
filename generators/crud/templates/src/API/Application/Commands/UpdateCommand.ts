import Validator from '../../../Common/Validator';
import { Command } from 'simple-command-bus';
import { Update<%= options.model %>Schema } from '../../../Controllers/Schemas/<%= options.model %>Schema'
import RequiredFieldException from '../../Exceptions/RequiredFieldException'
import * as _ from 'lodash';

export default class Update<%= options.model %>Command extends Command {
  private id;

  constructor(body : Object) {
    super();
    const validator = new Validator();
    const error = validator.validate(body, Update<%= options.model %>Schema);

    if(error) {
      const details = validator.validationResult(error.details)
      throw new RequiredFieldException(validator.validationResult(error.details));
    }
    _.assign(this, body);
  }

  getId(){
    return this.id;
  }

}
