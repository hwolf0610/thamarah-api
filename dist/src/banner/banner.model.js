"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
var BannerType;
(function (BannerType) {
    BannerType["CATEGORY"] = "CATEGORY";
    BannerType["PRODUCT"] = "PRODUCT";
})(BannerType = exports.BannerType || (exports.BannerType = {}));
exports.BannerSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String },
    bannerType: { type: BannerType },
    imageUrl: { type: String },
    imageId: { type: String },
    filePath: { type: String },
    categoryId: { type: String },
    categoryName: { type: String },
    productId: { type: String },
    productName: { type: String },
    status: { type: Boolean, default: true }
}, {
    timestamps: true
});
class BannerSaveDTO {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiModelProperty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], BannerSaveDTO.prototype, "title", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiModelProperty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], BannerSaveDTO.prototype, "description", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    swagger_1.ApiModelProperty({ enum: Object.keys(BannerType) }),
    class_validator_1.IsEnum(BannerType, { message: 'Banner type must be one of these ' + Object.keys(BannerType) }),
    __metadata("design:type", String)
], BannerSaveDTO.prototype, "bannerType", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsUrl(),
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], BannerSaveDTO.prototype, "imageUrl", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], BannerSaveDTO.prototype, "imageId", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], BannerSaveDTO.prototype, "filePath", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsMongoId(),
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], BannerSaveDTO.prototype, "categoryId", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsMongoId(),
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], BannerSaveDTO.prototype, "productId", void 0);
exports.BannerSaveDTO = BannerSaveDTO;
class BannerDTO extends BannerSaveDTO {
}
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], BannerDTO.prototype, "_id", void 0);
exports.BannerDTO = BannerDTO;
class ResponseUserBannerList {
}
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], ResponseUserBannerList.prototype, "response_code", void 0);
__decorate([
    swagger_1.ApiModelProperty({ isArray: true }),
    __metadata("design:type", BannerDTO)
], ResponseUserBannerList.prototype, "response_data", void 0);
exports.ResponseUserBannerList = ResponseUserBannerList;
class ResponseBanner {
}
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], ResponseBanner.prototype, "response_code", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", BannerDTO)
], ResponseBanner.prototype, "response_data", void 0);
exports.ResponseBanner = ResponseBanner;
class ResponseBannerList extends ResponseUserBannerList {
}
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", Number)
], ResponseBannerList.prototype, "total", void 0);
exports.ResponseBannerList = ResponseBannerList;
class ResponseBannerType {
}
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], ResponseBannerType.prototype, "response_code", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", Object)
], ResponseBannerType.prototype, "response_data", void 0);
exports.ResponseBannerType = ResponseBannerType;
//# sourceMappingURL=banner.model.js.map