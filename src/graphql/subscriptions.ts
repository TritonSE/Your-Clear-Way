/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String!) {
    onCreateUser(owner: $owner) {
      id
      username
      email
      phoneNumber
      homes {
        items {
          id
          homeID
          homeOwnerID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      ownElectricVehicle
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String!) {
    onUpdateUser(owner: $owner) {
      id
      username
      email
      phoneNumber
      homes {
        items {
          id
          homeID
          homeOwnerID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      ownElectricVehicle
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String!) {
    onDeleteUser(owner: $owner) {
      id
      username
      email
      phoneNumber
      homes {
        items {
          id
          homeID
          homeOwnerID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      ownElectricVehicle
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateHomeOwner = /* GraphQL */ `
  subscription OnCreateHomeOwner($owner: String!) {
    onCreateHomeOwner(owner: $owner) {
      id
      homeID
      homeOwnerID
      home {
        id
        homeOwners {
          nextToken
          startedAt
        }
        responses {
          nextToken
          startedAt
        }
        badges {
          nextToken
          startedAt
        }
        homeType
        addressLine1
        addressLine2
        city
        addressState
        country
        zipcode
        yearBuilt
        electricProvider
        gasProvider
        outDoorArea
        livableArea
        bedroomCount
        bathroomCount
        heatingFuelType
        heaterAge
        waterHeaterFuelType
        waterHeaterAge
        hasAirConditioner
        hasPool
        hasHotTub
        annualElectricalEnergyUsage
        annualGasPropaneEnergyUsage
        annualWaterUsage
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        homeowners
      }
      homeOwner {
        id
        username
        email
        phoneNumber
        homes {
          nextToken
          startedAt
        }
        ownElectricVehicle
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateHomeOwner = /* GraphQL */ `
  subscription OnUpdateHomeOwner($owner: String!) {
    onUpdateHomeOwner(owner: $owner) {
      id
      homeID
      homeOwnerID
      home {
        id
        homeOwners {
          nextToken
          startedAt
        }
        responses {
          nextToken
          startedAt
        }
        badges {
          nextToken
          startedAt
        }
        homeType
        addressLine1
        addressLine2
        city
        addressState
        country
        zipcode
        yearBuilt
        electricProvider
        gasProvider
        outDoorArea
        livableArea
        bedroomCount
        bathroomCount
        heatingFuelType
        heaterAge
        waterHeaterFuelType
        waterHeaterAge
        hasAirConditioner
        hasPool
        hasHotTub
        annualElectricalEnergyUsage
        annualGasPropaneEnergyUsage
        annualWaterUsage
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        homeowners
      }
      homeOwner {
        id
        username
        email
        phoneNumber
        homes {
          nextToken
          startedAt
        }
        ownElectricVehicle
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteHomeOwner = /* GraphQL */ `
  subscription OnDeleteHomeOwner($owner: String!) {
    onDeleteHomeOwner(owner: $owner) {
      id
      homeID
      homeOwnerID
      home {
        id
        homeOwners {
          nextToken
          startedAt
        }
        responses {
          nextToken
          startedAt
        }
        badges {
          nextToken
          startedAt
        }
        homeType
        addressLine1
        addressLine2
        city
        addressState
        country
        zipcode
        yearBuilt
        electricProvider
        gasProvider
        outDoorArea
        livableArea
        bedroomCount
        bathroomCount
        heatingFuelType
        heaterAge
        waterHeaterFuelType
        waterHeaterAge
        hasAirConditioner
        hasPool
        hasHotTub
        annualElectricalEnergyUsage
        annualGasPropaneEnergyUsage
        annualWaterUsage
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        homeowners
      }
      homeOwner {
        id
        username
        email
        phoneNumber
        homes {
          nextToken
          startedAt
        }
        ownElectricVehicle
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateHome = /* GraphQL */ `
  subscription OnCreateHome($owner: String!, $homeowners: String!) {
    onCreateHome(owner: $owner, homeowners: $homeowners) {
      id
      homeOwners {
        items {
          id
          homeID
          homeOwnerID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      responses {
        items {
          id
          homeID
          questionID
          answers
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      badges {
        items {
          id
          homeID
          badgeID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      homeType
      addressLine1
      addressLine2
      city
      addressState
      country
      zipcode
      yearBuilt
      electricProvider
      gasProvider
      outDoorArea
      livableArea
      bedroomCount
      bathroomCount
      heatingFuelType
      heaterAge
      waterHeaterFuelType
      waterHeaterAge
      hasAirConditioner
      hasPool
      hasHotTub
      annualElectricalEnergyUsage
      annualGasPropaneEnergyUsage
      annualWaterUsage
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
      homeowners
    }
  }
`;
export const onUpdateHome = /* GraphQL */ `
  subscription OnUpdateHome($owner: String!, $homeowners: String!) {
    onUpdateHome(owner: $owner, homeowners: $homeowners) {
      id
      homeOwners {
        items {
          id
          homeID
          homeOwnerID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      responses {
        items {
          id
          homeID
          questionID
          answers
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      badges {
        items {
          id
          homeID
          badgeID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      homeType
      addressLine1
      addressLine2
      city
      addressState
      country
      zipcode
      yearBuilt
      electricProvider
      gasProvider
      outDoorArea
      livableArea
      bedroomCount
      bathroomCount
      heatingFuelType
      heaterAge
      waterHeaterFuelType
      waterHeaterAge
      hasAirConditioner
      hasPool
      hasHotTub
      annualElectricalEnergyUsage
      annualGasPropaneEnergyUsage
      annualWaterUsage
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
      homeowners
    }
  }
`;
export const onDeleteHome = /* GraphQL */ `
  subscription OnDeleteHome($owner: String!, $homeowners: String!) {
    onDeleteHome(owner: $owner, homeowners: $homeowners) {
      id
      homeOwners {
        items {
          id
          homeID
          homeOwnerID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      responses {
        items {
          id
          homeID
          questionID
          answers
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      badges {
        items {
          id
          homeID
          badgeID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      homeType
      addressLine1
      addressLine2
      city
      addressState
      country
      zipcode
      yearBuilt
      electricProvider
      gasProvider
      outDoorArea
      livableArea
      bedroomCount
      bathroomCount
      heatingFuelType
      heaterAge
      waterHeaterFuelType
      waterHeaterAge
      hasAirConditioner
      hasPool
      hasHotTub
      annualElectricalEnergyUsage
      annualGasPropaneEnergyUsage
      annualWaterUsage
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
      homeowners
    }
  }
`;
export const onCreateQuestion = /* GraphQL */ `
  subscription OnCreateQuestion {
    onCreateQuestion {
      id
      text
      tags
      responses {
        items {
          id
          homeID
          questionID
          answers
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      options
      metadata
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateQuestion = /* GraphQL */ `
  subscription OnUpdateQuestion {
    onUpdateQuestion {
      id
      text
      tags
      responses {
        items {
          id
          homeID
          questionID
          answers
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      options
      metadata
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteQuestion = /* GraphQL */ `
  subscription OnDeleteQuestion {
    onDeleteQuestion {
      id
      text
      tags
      responses {
        items {
          id
          homeID
          questionID
          answers
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      options
      metadata
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateResponse = /* GraphQL */ `
  subscription OnCreateResponse($owner: String) {
    onCreateResponse(owner: $owner) {
      id
      homeID
      questionID
      home {
        id
        homeOwners {
          nextToken
          startedAt
        }
        responses {
          nextToken
          startedAt
        }
        badges {
          nextToken
          startedAt
        }
        homeType
        addressLine1
        addressLine2
        city
        addressState
        country
        zipcode
        yearBuilt
        electricProvider
        gasProvider
        outDoorArea
        livableArea
        bedroomCount
        bathroomCount
        heatingFuelType
        heaterAge
        waterHeaterFuelType
        waterHeaterAge
        hasAirConditioner
        hasPool
        hasHotTub
        annualElectricalEnergyUsage
        annualGasPropaneEnergyUsage
        annualWaterUsage
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        homeowners
      }
      question {
        id
        text
        tags
        responses {
          nextToken
          startedAt
        }
        options
        metadata
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      answers
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateResponse = /* GraphQL */ `
  subscription OnUpdateResponse($owner: String) {
    onUpdateResponse(owner: $owner) {
      id
      homeID
      questionID
      home {
        id
        homeOwners {
          nextToken
          startedAt
        }
        responses {
          nextToken
          startedAt
        }
        badges {
          nextToken
          startedAt
        }
        homeType
        addressLine1
        addressLine2
        city
        addressState
        country
        zipcode
        yearBuilt
        electricProvider
        gasProvider
        outDoorArea
        livableArea
        bedroomCount
        bathroomCount
        heatingFuelType
        heaterAge
        waterHeaterFuelType
        waterHeaterAge
        hasAirConditioner
        hasPool
        hasHotTub
        annualElectricalEnergyUsage
        annualGasPropaneEnergyUsage
        annualWaterUsage
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        homeowners
      }
      question {
        id
        text
        tags
        responses {
          nextToken
          startedAt
        }
        options
        metadata
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      answers
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteResponse = /* GraphQL */ `
  subscription OnDeleteResponse($owner: String) {
    onDeleteResponse(owner: $owner) {
      id
      homeID
      questionID
      home {
        id
        homeOwners {
          nextToken
          startedAt
        }
        responses {
          nextToken
          startedAt
        }
        badges {
          nextToken
          startedAt
        }
        homeType
        addressLine1
        addressLine2
        city
        addressState
        country
        zipcode
        yearBuilt
        electricProvider
        gasProvider
        outDoorArea
        livableArea
        bedroomCount
        bathroomCount
        heatingFuelType
        heaterAge
        waterHeaterFuelType
        waterHeaterAge
        hasAirConditioner
        hasPool
        hasHotTub
        annualElectricalEnergyUsage
        annualGasPropaneEnergyUsage
        annualWaterUsage
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        homeowners
      }
      question {
        id
        text
        tags
        responses {
          nextToken
          startedAt
        }
        options
        metadata
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      answers
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateBadge = /* GraphQL */ `
  subscription OnCreateBadge {
    onCreateBadge {
      id
      name
      type
      criteria
      logoName
      homes {
        items {
          id
          homeID
          badgeID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateBadge = /* GraphQL */ `
  subscription OnUpdateBadge {
    onUpdateBadge {
      id
      name
      type
      criteria
      logoName
      homes {
        items {
          id
          homeID
          badgeID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteBadge = /* GraphQL */ `
  subscription OnDeleteBadge {
    onDeleteBadge {
      id
      name
      type
      criteria
      logoName
      homes {
        items {
          id
          homeID
          badgeID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateHomeBadge = /* GraphQL */ `
  subscription OnCreateHomeBadge($owner: String!) {
    onCreateHomeBadge(owner: $owner) {
      id
      homeID
      badgeID
      home {
        id
        homeOwners {
          nextToken
          startedAt
        }
        responses {
          nextToken
          startedAt
        }
        badges {
          nextToken
          startedAt
        }
        homeType
        addressLine1
        addressLine2
        city
        addressState
        country
        zipcode
        yearBuilt
        electricProvider
        gasProvider
        outDoorArea
        livableArea
        bedroomCount
        bathroomCount
        heatingFuelType
        heaterAge
        waterHeaterFuelType
        waterHeaterAge
        hasAirConditioner
        hasPool
        hasHotTub
        annualElectricalEnergyUsage
        annualGasPropaneEnergyUsage
        annualWaterUsage
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        homeowners
      }
      badge {
        id
        name
        type
        criteria
        logoName
        homes {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateHomeBadge = /* GraphQL */ `
  subscription OnUpdateHomeBadge($owner: String!) {
    onUpdateHomeBadge(owner: $owner) {
      id
      homeID
      badgeID
      home {
        id
        homeOwners {
          nextToken
          startedAt
        }
        responses {
          nextToken
          startedAt
        }
        badges {
          nextToken
          startedAt
        }
        homeType
        addressLine1
        addressLine2
        city
        addressState
        country
        zipcode
        yearBuilt
        electricProvider
        gasProvider
        outDoorArea
        livableArea
        bedroomCount
        bathroomCount
        heatingFuelType
        heaterAge
        waterHeaterFuelType
        waterHeaterAge
        hasAirConditioner
        hasPool
        hasHotTub
        annualElectricalEnergyUsage
        annualGasPropaneEnergyUsage
        annualWaterUsage
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        homeowners
      }
      badge {
        id
        name
        type
        criteria
        logoName
        homes {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteHomeBadge = /* GraphQL */ `
  subscription OnDeleteHomeBadge($owner: String!) {
    onDeleteHomeBadge(owner: $owner) {
      id
      homeID
      badgeID
      home {
        id
        homeOwners {
          nextToken
          startedAt
        }
        responses {
          nextToken
          startedAt
        }
        badges {
          nextToken
          startedAt
        }
        homeType
        addressLine1
        addressLine2
        city
        addressState
        country
        zipcode
        yearBuilt
        electricProvider
        gasProvider
        outDoorArea
        livableArea
        bedroomCount
        bathroomCount
        heatingFuelType
        heaterAge
        waterHeaterFuelType
        waterHeaterAge
        hasAirConditioner
        hasPool
        hasHotTub
        annualElectricalEnergyUsage
        annualGasPropaneEnergyUsage
        annualWaterUsage
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        homeowners
      }
      badge {
        id
        name
        type
        criteria
        logoName
        homes {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
