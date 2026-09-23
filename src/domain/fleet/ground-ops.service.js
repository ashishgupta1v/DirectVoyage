import { FLEET, FLEET_PROMISES } from './fleet.data.js';

export class GroundOpsService {
  static getFleet() {
    return FLEET;
  }

  static getPromises() {
    return FLEET_PROMISES;
  }
}
