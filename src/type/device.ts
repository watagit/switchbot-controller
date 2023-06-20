export type NonInfraredDevice = {
  deviceId: string;
  deviceName: string;
  deviceType?: DeviceType;
  enableCloudServices?: boolean
  hubDeviceId: string;
  master?: boolean;
};

type HubMini = "Hub Mini";
type SmartLock = "Smart Lock";
type DeviceType = HubMini | SmartLock;

export type InfraredDevice = {
  deviceId: string;
  deviceName: string;
  remoteType: RemoteType;
  hubDeviceId: string;
};

type AirConditioner = "Air Conditioner";
type DiyLight = "DIY Light";
type RemoteType = AirConditioner | DiyLight;
