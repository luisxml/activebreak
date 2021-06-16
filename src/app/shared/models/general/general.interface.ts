import { RecordStatus } from '../../constant';

export class ResultResponseModel {
  CodeResult: number;
  Id: number;
  IdResult: number;
  MessageResult: string;
}

export class GeneralResponse {
  Status: boolean;
  State: number;
  Message: string;
  ResultResponse: ResultResponseModel;
}

export class BaseRecordRequest {
  RecordStatus: string;
  UserRecord?: string;
  RecordDate?: Date;
  constructor() {
    this.RecordStatus = RecordStatus.Activate;
  }
}

export interface LoaderState {
  show: boolean;
}

export class MasterTableRequest extends BaseRecordRequest {
  IdMasterTable: string;
  IdMasterTableParent: string;
  Value: string;
  constructor() {
    super();
    this.IdMasterTable = "";
    this.IdMasterTableParent = "";
    this.Value = "";
  }
}

export class MasterTableResponse {
  IdMasterTable: string;
  IdMasterTableParent: string;
  Order: number;
  Name: string;
  Value: string;
  checked?: boolean;
}

export class MasterResponse extends GeneralResponse {
  Value: MasterTableResponse[];
}

export class FilterColumn {
  NameColumn: string;
  ValueColumn: string;
}

export class PaginationRequest {
  CurrentPage: number;
  RowsPerPage: number;
  ColumnOrder: string;
  TypeOrder: string;
}

export class PaginationResponse {
  TotalPages: number;
  QuantityRows: number;
}
