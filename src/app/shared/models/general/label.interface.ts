export class ResponseLabel {
  general: GeneralLabel;
  message: MessageLabel;
  login: LoginLabel;
  constructor() {
    this.general = new GeneralLabel();
    this.message = new MessageLabel();
    this.login = new LoginLabel();
  }
}

export class LoginLabel {
  lblTitle: string;
  lblEmail: string;
  lblNetworkUserEmail: string;
  lblNetworkUser: string;
  lblAccess: string;
  lblNetworkUserStrategicPartner: string;
}
export class GeneralLabel {
  lblTitle: string;
  lblClosedSession: string;
  lblLoading: string;
  lblFilter:string;
  lblFilterBy:string;
  lblShowRows:string;
  lblWelcome: string;
  lblStartDate: string;
  lblFooter: string;
  lblUserProfile:string;
  lblEndDate: string;
  lblClear: string;
  lblSearch: string;
  lblConfirmDelete:string;
  lblConfirm:string;
  lblButtonYes:string;
  lblButtonNo:string;
  lblThanks:string;
  lblNo:string;
  lblYes:string;  
  lblTypeDocument:string;
  lblRequired:string;
  lblSelect:string;
}

export class ComponentLabel{
  lblBirthDate:string;
  lblDocumentNumber:string;
  lblTypeDocument:string;
  lblName:string;
  lblLastFirstName:string;
  lblLastSecondName:string;
  lblEmail:string;
  lblMonthlyIncome:string;
  lblAttachFile:string;
  lblExamine:string;
}

export class DemoLabel{
  lblTitle: string;
  lblNew:string;
  lblNumber:string;
  lblTypeDocument:string;
  lblFullName:string;
  lblAction:string;
  lblEdit:string;
  lblDeactivate:string;
  lblActivate:string;
}

export class MessageLabel {
  error: string;
  success: string;
  confirmContinue:string;
}

export class ActionLabel {  
  new: string;
  edit:string;  
  save:string;
}

export class TypeGridLabel{
  edit:string;
  toggleOn:string;
  toggleOff:string;
}

export class IconGridLabel{
  penSquare:string;
  toggleOff:string;
  toggleOn:string;
}
