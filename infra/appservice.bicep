param appServiceName string
param location string = 'eastus'
param appServicePlanId string

resource appService 'Microsoft.Web/sites@2021-02-01' = {
  name: appServiceName
  location: location
  kind: 'app'
  properties: {
    serverFarmId: appServicePlanId
    httpsOnly: true
  }
  siteConfig: {
    appSettings: [
      {
        name: 'WEBSITE_NODE_DEFAULT_VERSION'
        value: '10.14.1'
      }
    ]
  }
}
