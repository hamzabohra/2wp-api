import {
  Filter,
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {PeginConfiguration} from '../models';
import {PeginConfigurationRepository} from '../repositories';

export class PeginConfigurationController {
  constructor(
    @repository(PeginConfigurationRepository)
    public peginConfigurationRepository : PeginConfigurationRepository,
  ) {}


  @get('/pegin-configuration', {
    responses: {
      '200': {
        description: 'Array of PeginConfiguration model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(PeginConfiguration, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(PeginConfiguration) filter?: Filter<PeginConfiguration>,
  ): Promise<PeginConfiguration[]> {
    return this.peginConfigurationRepository.find(filter);
  }
}
