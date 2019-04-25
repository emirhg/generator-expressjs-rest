import Validator from '../../../Common/Validator';
import { Command } from 'simple-command-bus';
import { Store<%= options.model %>Schema } from '../../../Controllers/Schemas/<%= options.model %>Schema'
import * as _ from 'lodash';
import RequiredFieldException from '../../Exceptions/RequiredFieldException';

export default class Create<%= options.model %>Command extends Command {

  constructor(body: Object) {
    super();
    if(!body) throw Error('Body not found');

    const validator = new Validator();
    const error = validator.validate(body, Store<%= options.model %>Schema);

    if(error) {
      const details = validator.validationResult(error.details)
      throw new RequiredFieldException(validator.validationResult(error.details));
    }
    _.assign(this, body);
  }
}
