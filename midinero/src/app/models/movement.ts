import { StateDTO } from "./common";
import { MovementType, MovementTypeDTO } from "./movement-type";

export class NewMovementRequestDTO {
    movementDescription: string;
    movementType: MovementTypeDTO;
    movementAmount: number;
    userId: number;

    constructor(movementDescription: string, movementType: MovementTypeDTO, movementAmount: number, userId?: number) {
        this.movementDescription = movementDescription;
        this.movementType = movementType;
        this.movementAmount = movementAmount;
        this.userId = userId || 0;
    }
}

export class NewMovementResponseDTO {
    stateNewMovement: StateDTO;

    constructor(stateNewMovement: StateDTO) {
        this.stateNewMovement = stateNewMovement;
    }
}

export class MovementListResponseDTO {
    stateMovement: StateDTO;
    movementList: Array<MovementDTO>;

    constructor(stateMovement: StateDTO, movementList: Array<MovementDTO>) {
        this.stateMovement = stateMovement;
        this.movementList = movementList;
    }
}

export class MovementDTO {
    movementDate: Date;
    movementDescription: string;
    movementType: MovementTypeDTO;
    movementAmount: number;

    constructor(movementDate: Date, movementDescription: string, movementType: MovementTypeDTO, movementAmount: number) {
        this.movementDate = movementDate;
        this.movementDescription = movementDescription;
        this.movementType = movementType;
        this.movementAmount = movementAmount;
    }
}

export class Movement {
    movementDate: Date;
    movementDescription: string;
    movementType: MovementType;
    movementAmount: number;

    constructor(movementDate: Date, movementDescription: string, movementType: MovementTypeDTO, movementAmount: number) {
        this.movementDate = movementDate;
        this.movementDescription = movementDescription;
        this.movementType = movementType;
        this.movementAmount = movementAmount;
    }
}

export class MovementsAccountStatusResponseDTO {
    stateMovementsAccountStatus: StateDTO;
    accountStatus: string;
    accountDate: string;

    constructor(stateMovementsAccountStatus: StateDTO, accountStatus: string, accountDate: string) {
        this.stateMovementsAccountStatus = stateMovementsAccountStatus;
        this.accountStatus = accountStatus;
        this.accountDate = accountDate;
    }
}