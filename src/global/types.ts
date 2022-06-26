export interface IObjectMap {
  [key: string]: any;
}

export interface IAction {
  type: string;
  payload?: any;
}

export interface ISelectValue {
  label: string;
  value: any;
}
