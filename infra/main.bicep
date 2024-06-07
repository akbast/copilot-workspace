targetScope = 'resourceGroup'

resource appService 'Microsoft.Web/sites@2021-02-01' = {
  name: 'appServiceName'
  location: 'location'
  properties: {
    serverFarmId: 'appServicePlanId'
  }
}

resource storageAccount 'Microsoft.Storage/storageAccounts@2021-04-01' = {
  name: 'storageAccountName'
  location: 'location'
  kind: 'StorageV2'
  sku: {
    name: 'Standard_LRS'
  }
  properties: {
    accessTier: 'Hot'
  }
}
