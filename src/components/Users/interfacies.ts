import {DateBirth, Picture, User, UserName} from "../../Redux/usersReducer/interfacies";

export interface PropsUserCardPreview {
    image: Picture;
    name: UserName;
    birth: DateBirth;
    background: string;
    gender: string;
    id: string;
    user: User;
}