import Update<%= options.model %>Command from '../../Commands/<%= options.models %>/Update<%= options.model %>Command';
import <%= options.model %>Services from '../../Services/<%= options.models %>/<%= options.model %>Services';
import <%= options.model %> from '../../Domain/Entities/<%= options.model %>';

export default class Update<%= options.model %>Handler {
  private <%= options.modelInstance %>Services: <%= options.model %>Services;

  constructor() {
    this.<%= options.modelInstance %>Services = new <%= options.model %>Services();
  }

  public async  handle(command : Update<%= options.model %>Command) {
    const model = new Model(command);
    return await this.modelServices.update(model);
  }
}
