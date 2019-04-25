import Create<%= options.model %>Command from '../../Commands/<%= options.models %>/Create<%= options.model %>Command';
import <%= options.model %>Services from '../../Services/<%= options.models %>/<%= options.model %>Services';
import <%= options.model %> from '../../Domain/Entities/<%= options.model %>';

export default class Create<%= options.model %>Handler {
  private <%= options.modelInstance %>Services: <%= options.model %>Services;

  constructor() {
    this.<%= options.modelInstance %>Services = new <%= options.model %>Services();
  }

  public async  handle(command : Create<%= options.model %>Command) {
    const <%= options.modelInstance %> = new <%= options.model %>(command);
    return await this.modelServices.store(<%= options.modelInstance %>);
  }
}
