"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.akbar = void 0;
let logFlag = false;
let akbar = (data) => __awaiter(void 0, void 0, void 0, function* () {
    if (logFlag) {
        console.log(data);
    }
    else
        return;
});
exports.akbar = akbar;
var User;
(function (User) {
    User[User["Driver"] = 1] = "Driver";
    User[User["Company"] = 2] = "Company";
    User[User["Manager"] = 3] = "Manager";
    User[User["User"] = 4] = "User";
})(User || (User = {}));
exports.User = User;
//# sourceMappingURL=helper.js.map