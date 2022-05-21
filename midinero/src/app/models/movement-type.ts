import { StateDTO } from "./common";

export class MovementTypeDTO {
    movementTypeId: number;
    movementTypeName: string;
    movementIsPositive: boolean;

    constructor(movementTypeId: number, movementTypeName: string, movementIsPositive: boolean) {
        this.movementTypeId = movementTypeId;
        this.movementTypeName = movementTypeName;
        this.movementIsPositive = movementIsPositive;
    }
}

export class MovementType {
    movementTypeId: number;
    movementTypeName: string;
    movementIsPositive: boolean;

    constructor(movementTypeId: number, movementTypeName: string, movementIsPositive: boolean) {
        this.movementTypeId = movementTypeId;
        this.movementTypeName = movementTypeName;
        this.movementIsPositive = movementIsPositive;
    }
}

export class MovementTypeListResponseDTO {
    stateMovementType: StateDTO;
    movementTypeList: Array<MovementTypeDTO>;

    constructor(stateMovementType: StateDTO, movementTypeList: Array<MovementTypeDTO>) {
        this.stateMovementType = stateMovementType;
        this.movementTypeList = movementTypeList;
    }
}