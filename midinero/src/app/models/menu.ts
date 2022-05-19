import { StateDTO } from "./common";

export class Menu {
    menuName: string;
    menuEndpoint: string;

    constructor(menuName: string, menuEndpoint: string) {
        this.menuName = menuName;
        this.menuEndpoint = menuEndpoint;
    }
}

export class MenuDTO {
    menuName: string;
    menuEndpoint: string;

    constructor(menuName: string, menuEndpoint: string) {
        this.menuName = menuName;
        this.menuEndpoint = menuEndpoint;
    }
}

export class MenuListResponseDTO {
    stateMenuList: StateDTO;
    menuList: MenuDTO[];

    constructor(stateMenuList: StateDTO, menuList: MenuDTO[]) {
        this.stateMenuList = stateMenuList;
        this.menuList = menuList;
    }
}

