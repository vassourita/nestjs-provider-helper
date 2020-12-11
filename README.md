# NestJS Provider Helper

This helper creates a provider structure for NestJS modules in a opinionated way, where every provider must be a implementation of a interface

The ProviderHelper class exposes static methods to create ClassProviders, FactoryProviders, ExistingProviders and ValueProviders

### ClassProvider example

```ts
@Module({
  controllers: [CatsController],
  providers: [
    ProviderHelper.createClassProvider<ICatService, CatService>('ICatService', CatService),
    ProviderHelper.createClassProvider<ICatRepository, TypeormCatRepository>('ICatRepository', CatRepository),
  ],
})
export class CatsModule {}
```

### FactoryProvider example

```ts
@Module({
  controllers: [CatsController],
  providers: [
    ProviderHelper.createClassProvider<ICatRepository, TypeormCatRepository>('ICatRepository', CatRepository),
    ProviderHelper.createFactoryProvider<ICatService, CatService>(
      'ICatService',
      (ICatRepository: catRepository) => new CatService(catRepository),
      ['ICatRepository']
    ),
  ],
})
export class CatsModule {}
```
