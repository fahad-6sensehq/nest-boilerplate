// import { ConfigStatus } from '@common/enums/configStatus.enum';
// import { StatusEnum } from '@common/enums/status.enum';
// import { EINSecureHelper } from '@common/helpers/EinHelper';
// import {
//     IAddress,
//     IConstructCreateAddressObject,
//     IConstructUpdateAddressObject,
// } from '@modules/address/interfaces/address.interface';
// import { IBillingInfo } from '@modules/billing-info/interfaces/billing.interface';
// import { CreateCompanyDTO } from '@modules/company/dto/create-company.dto';
// import {
//     ICompany,
//     ICreateBillingInfoObject,
//     ICreateCompanyObject,
// } from '@modules/company/interfaces/company.interface';
// import { ContractRateSheetStatus } from '@modules/contract/enums/contract-ratesheet.enum';
// import { CreateEmployeeRoleDto } from '@modules/employee-role/dto/create-employee-role.dto';
// import { IEmployeeRoleObj } from '@modules/employee-role/interface/employee-role.interface';
// import { CreateEmployeeDTO } from '@modules/employee/dto/create-employee.dto';
// import { IEmployeeObj } from '@modules/employee/interfaces/employee.interface';
// import { CreateLedgerDto } from '@modules/financial/dto/create-ledger.dto';
// import { PaymentIntegrationDto } from '@modules/financial/dto/paymentIntegration.dto';
// import { UpdateLedgerDto } from '@modules/financial/dto/update-ledger.dto';
// import { IAccountIntegration } from '@modules/financial/interfaces/account-integration.interface';
// import { IAccountNames } from '@modules/financial/interfaces/account-names.interface';
// import { ILedgerConfigObj } from '@modules/financial/interfaces/create-ledger.interface';
// import { IDecryptedIntegration } from '@modules/financial/interfaces/decrypted-integration.interface';
// import { IIntegrationResponse } from '@modules/financial/interfaces/integration-auth-response.interface';
// import { IAccIntegrationCred } from '@modules/financial/interfaces/integration-req.interface';
// import { IPaymentIntegration } from '@modules/financial/interfaces/paymentConfig.interface';
// import { IUpdateLedger } from '@modules/financial/interfaces/update-ledger.interface';
// import { CreateProductEmployeeDto } from '@modules/product-employees/dto/create-product-employee.dto';
// import { ICreateProductEmployeeObject } from '@modules/product-employees/interfaces/product-employee.interface';
// import { CreateProductDto } from '@modules/product/dto/create-product.dto';
// import { IDocument } from '@modules/product/interfaces/document.interface';
// import { IContractRateSheet, ICreateProduct, IProductObj } from '@modules/product/interfaces/productList.interface';
// import { CreateRateSheetDto, CreateTeamStructureDto } from '@modules/rate-sheet/dto/create-rate-sheet.dto';
// import { IRateSheetObject } from '@modules/rate-sheet/interfaces/rate-sheet.interface';
// import { CreateResourceCategoryDto } from '@modules/resource-category/dto/create-resource-category.dto';
// import { UpdateResourceCategoryDto } from '@modules/resource-category/dto/update-resource-category.dto';
// import { IResourceCategory } from '@modules/resource-category/interfaces/resourceCategory.interface';
// import { CreateResourceTypeDto } from '@modules/resource-type/dto/create-resource-type.dto';
// import { IConstructCreateResourceTypeObj } from '@modules/resource-type/interface/resource-type.interface';
// import { CreateResourceDto } from '@modules/resource/dto/create-resource.dto';
// import { EditResourceDto } from '@modules/resource/dto/edit-resource.dto';
// import { IConstructCreateResourceObj } from '@modules/resource/interface/resource.interface';
// import { CreateAISettingsDto } from '@modules/setting/dto/create-ai-assistant-configs.dto';
// import { CreateSkillDto } from '@modules/setting/dto/create-skills.dto';
// import { IAISettingsResponse } from '@modules/setting/interface/ai-assistant-configs.interface';
// import { ISkillsSettingsResponse } from '@modules/setting/interface/skills-configs.interface';
// import { CreateStudioDto } from '@modules/studio/dto/create-studio.dto';
// import { UpdateStudioDto } from '@modules/studio/dto/update-studio.dto';
// import { IStudio } from '@modules/studio/interfaces/studio.interface';
// import { CreateSubscriptionPlanDto } from '@modules/subscription/dto/create-subscription-plan.dto';
// import { SubscriptionDto } from '@modules/subscription/dto/subscription.dto';
// import { SubscriptionStatusEnum } from '@modules/subscription/enums/subscription-status.enum';
// import { ISubscribe } from '@modules/subscription/interfaces/subscription.interface';
// import { ITeamStructureObj } from '@modules/team-rates/interfaces/team-rates.interface';
// import { IConstructUpdateToolsObj } from '@modules/technology-category/interfaces/tool-type.interface';
// import { CreateTechnologyToolDto } from '@modules/technology-tool/dto/create-technology-tool.dto';
// import { TypeEnum } from '@modules/technology-tool/enums/tool-type.enum';
// import {
//     ITechnologyToolDetails,
//     ITechnologyToolObj,
//     ITechnologyTools,
// } from '@modules/technology-tool/interfaces/technology-tool.interface';
// import { IUser } from '@modules/users/interfaces/user.interface';
// import mongoose, { Types } from 'mongoose';
// import { DataSecurityHelper } from './dataSecurity.helper';
// import { DateHelper, StartAndEndDate } from './date.helper';
// import { DeleteImageFromS3 } from './deleteImageFromS3';
// import { MongooseHelper } from './mongooseHelper';
// import { Utils } from './utils';

// export class ConstructObjectFromDtoHelper extends StartAndEndDate {
//     static async constructCreateCompanyObject(
//         user: IUser,
//         createCompanyDTO: CreateCompanyDTO,
//         address: any,
//         billingInfo: any
//     ): Promise<ICreateCompanyObject> {
//         //hashed EIN
//         let ein: string;
//         if (createCompanyDTO?.ein) {
//             const hashedEin = await EINSecureHelper.getEinHashed(createCompanyDTO?.ein);
//             ein = hashedEin;
//         }
//         return {
//             studioId: new mongoose.Types.ObjectId(createCompanyDTO?.studioId),
//             name: createCompanyDTO?.name ?? '',
//             email: createCompanyDTO?.email ?? '',
//             masterEmail: createCompanyDTO?.masterEmail ?? '',
//             phone: createCompanyDTO?.phone ?? '',
//             ein: ein ?? '',
//             userId: null,
//             addressId: address?._id,
//             billingInfoId: billingInfo?._id,
//             clientId: new mongoose.Types.ObjectId(user?.clientId),
//             created_by: user?.userId,
//         };
//     }

//     static async constructUpdateCompanyObject(user: IUser, createCompanyDTO: CreateCompanyDTO, company: ICompany) {
//         //hashed EIN
//         let ein: string = createCompanyDTO?.ein ?? createCompanyDTO?.ein;
//         if (createCompanyDTO?.ein) {
//             const hashedEin = await EINSecureHelper.getEinHashed(createCompanyDTO?.ein);
//             ein = hashedEin;
//         }
//         return {
//             name: createCompanyDTO?.name ?? company?.name,
//             email: createCompanyDTO?.email ?? company?.email,
//             masterEmail: createCompanyDTO?.masterEmail ?? company?.masterEmail,
//             phone: createCompanyDTO?.phone ?? company?.phone,
//             ein: ein ?? company?.ein,
//             userId: new mongoose.Types.ObjectId(user?.userId),
//             addressId: company?.address?._id,
//             billingInfoId: company?.billingInfo?._id,
//             clientId: new mongoose.Types.ObjectId(user?.clientId),
//         };
//     }

//     static constructCreateAddressObject(
//         addressDto: CreateCompanyDTO | CreateStudioDto,
//         user: IUser
//     ): IConstructCreateAddressObject {
//         return {
//             addressLine: addressDto?.addressLine ?? '',
//             country: addressDto?.country ?? '',
//             city: addressDto?.city ?? '',
//             state: addressDto?.state ?? '',
//             zipCode: addressDto?.zipCode ?? '',
//             created_by: user?.userId,
//         };
//     }

//     static constructUpdateAddressObject(
//         updateCompanyDto: CreateCompanyDTO,
//         company: ICompany
//     ): IConstructUpdateAddressObject {
//         return {
//             addressLine: updateCompanyDto?.addressLine ?? company?.address?.addressLine,
//             country: updateCompanyDto?.country ?? company?.address?.country,
//             city: updateCompanyDto?.city ?? company?.address?.city,
//             state: updateCompanyDto?.state ?? company?.address?.state,
//             zipCode: updateCompanyDto?.zipCode ?? company?.address?.zipCode,
//         };
//     }

//     static constructCreateBillingInfoObject(
//         billingDTO, //: CreateCompanyDTO | CreateStudioDto,
//         user: IUser
//     ): ICreateBillingInfoObject {
//         return {
//             startDate: new DateHelper().getTimeInISODate(new Date(billingDTO?.startDate)) ?? '',
//             endDate: billingDTO?.endDate ? new DateHelper().getTimeInISODate(new Date(billingDTO?.endDate)) : '',
//             created_by: user?.userId,
//         };
//     }

//     static constructUpdateBillingInfoObject(
//         createCompanyDto: CreateCompanyDTO,
//         company: ICompany
//     ): ICreateBillingInfoObject {
//         return {
//             startDate:
//                 new DateHelper().getTimeInISODate(new Date(createCompanyDto?.startDate)) ??
//                 new DateHelper().getTimeInISODate(new Date(company?.billingInfo?.startDate)),
//             endDate:
//                 new DateHelper().getTimeInISODate(new Date(createCompanyDto?.endDate)) ??
//                 new DateHelper().getTimeInISODate(new Date(company?.billingInfo?.endDate)),
//         };
//     }

//     static constructEmployeeRoleObj(employeeRoleDto: CreateEmployeeRoleDto, user: IUser): IEmployeeRoleObj {
//         return {
//             name: employeeRoleDto?.name ?? '',
//             description: employeeRoleDto?.description.trim() ?? '',
//             status: StatusEnum.ACTIVE,
//             isDeleted: false,
//             startDate: new DateHelper().now('UTC'),
//             clientId: new Types.ObjectId(user?.clientId),
//             created_by: user?.userId,
//         };
//     }

//     static constructEmployeeObj(
//         user: IUser,
//         createEmployeeDto: CreateEmployeeDTO,
//         imgUrl: string,
//         key: string
//     ): IEmployeeObj {
//         const skills = createEmployeeDto?.skills?.split(',').map((skill) => new Types.ObjectId(skill?.trim()));
//         const employeeRoleIds = createEmployeeDto?.employeeRoleIds
//             ?.split(',')
//             .map((id) => new Types.ObjectId(id?.trim()));

//         // comment to push
//         return {
//             name: createEmployeeDto?.name ? createEmployeeDto?.name?.trim() : '',
//             email: createEmployeeDto?.email ? createEmployeeDto?.email?.trim() : '',
//             phone: createEmployeeDto?.phone ? createEmployeeDto?.phone?.trim() : '',
//             employeeRoleIds: employeeRoleIds ?? [],
//             clientId: new mongoose.Types.ObjectId(user?.clientId) ?? '',
//             created_by: user?.userId,
//             imageUrl: imgUrl,
//             imageKey: key,
//             skills: skills ?? [],
//             bio: createEmployeeDto?.bio ?? '',
//             gender: createEmployeeDto?.gender ?? '',
//             experiences: createEmployeeDto?.experiences ? parseFloat(createEmployeeDto?.experiences) : 0,
//         };
//     }

//     static constructToolsObj(tool: CreateTechnologyToolDto | ITechnologyTools, user: IUser): ITechnologyToolObj {
//         return {
//             name: tool?.name ?? '',
//             typeId: new Types.ObjectId(tool?.typeId) ?? '',
//             website: tool?.website ? tool?.website?.trim() : '',
//             logo: tool?.logo ?? '',
//             logoKey: tool?.logoKey ?? '',
//             logoName: Utils.retrieveName(tool?.logoKey),
//             status: StatusEnum.ACTIVE,
//             type: tool?.type ?? TypeEnum.OTHERS,
//             clientId: new Types.ObjectId(user?.clientId),
//             created_by: user?.userId,
//         };
//     }

//     static constructUpdateToolsObj(tool: ITechnologyToolDetails): IConstructUpdateToolsObj {
//         return {
//             name: tool?.name ?? '',
//             typeId: new Types.ObjectId(tool?.type?._id) ?? '',
//             website: tool?.website ?? '',
//             logo: tool?.logo ?? '',
//         };
//     }

//     static constructRateSheetObj(createRateSheetDto: CreateRateSheetDto, user: IUser): IRateSheetObject {
//         return {
//             name: createRateSheetDto?.name ?? '',
//             startDate: new DateHelper().now('UTC'),
//             clientId: new Types.ObjectId(user?.clientId),
//             created_by: user?.userId,
//         };
//     }

//     static constructTeamStructureObj(
//         structure: CreateTeamStructureDto,
//         rateSheetId: string,
//         user: IUser
//     ): ITeamStructureObj {
//         return {
//             rateSheetId: new Types.ObjectId(rateSheetId),
//             employeeRoleId: new Types.ObjectId(structure?.role) ?? '',
//             internalRate: structure?.internalRate ?? 0,
//             billRate: structure?.billRate ?? 0,
//             created_by: user?.userId,
//         };
//     }

//     static constructContractObj(createProductDto: CreateProductDto, productId: string, user: IUser): ICreateProduct {
//         return {
//             rateSheetId: createProductDto?.rateSheetId ?? '',
//             name: createProductDto?.contractName ?? '',
//             productId: productId ?? '',
//             startDate: createProductDto?.startDate ?? '',
//             endDate: createProductDto?.endDate?.trim() ? createProductDto?.endDate?.trim() : null,
//             safeAgreementAmount: createProductDto?.safeAgreementAmount ?? null,
//             valuationCapitalAmount: createProductDto?.valuationCapitalAmount ?? null,
//             discount: createProductDto?.discount ?? null,
//             status: createProductDto?.contractStatus,
//             created_by: user?.userId,
//             clientId: user?.clientId,
//         };
//     }

//     static constructContractUpdateObj(previousContract, newRateSheetId, user: IUser) {
//         return {
//             rateSheetId: newRateSheetId,
//             name: previousContract?.name,
//             productId: previousContract?.productId,
//             safeAgreementAmount: previousContract?.safeAgreementAmount ?? null,
//             valuationCapitalAmount: previousContract?.valuationCapitalAmount ?? null,
//             discount: previousContract?.discount ?? null,
//             status: previousContract?.contractStatus,
//             created_by: user?.userId,
//             clientId: user?.clientId,
//         };
//     }

//     static constructContractDiscountObj(currentContract, updateFields, user: IUser) {
//         return {
//             rateSheetId: currentContract?.rateSheetId,
//             name: currentContract?.name,
//             productId: currentContract?.productId,
//             startDate: updateFields?.startDate,
//             endDate: updateFields?.endDate,
//             safeAgreementAmount: updateFields?.safeAgreementAmount,
//             valuationCapitalAmount: updateFields?.valuationCapitalAmount,
//             discount: updateFields?.discount ?? null,
//             status: updateFields?.status,
//             created_by: user?.userId,
//             clientId: user?.clientId,
//         };
//     }

//     static constructContractRateSheetObj(
//         createProductDto: CreateProductDto,
//         productId: string,
//         user: IUser
//     ): IContractRateSheet {
//         return {
//             rateSheetId: createProductDto?.rateSheetId ?? '',
//             productId: productId ?? '',
//             assignedOn: String(new DateHelper().now('UTC')) ?? '',
//             clientId: user?.clientId,
//             discount: createProductDto?.discount ?? null,
//             created_by: user?.userId,
//             isUsing: ContractRateSheetStatus.TRUE,
//         };
//     }

//     static constructProductObj(createProductDto: CreateProductDto, user: IUser): IProductObj {
//         return {
//             name: createProductDto?.productName ?? '',
//             details: createProductDto?.productDetails ?? '',
//             companyId: createProductDto?.companyId ?? '',
//             created_by: user?.userId,
//             clientId: user?.clientId,
//         };
//     }

//     static constructDocumentObj(createDocumentParams: {
//         createProductDto: CreateProductDto;
//         user: IUser;
//         productId: string;
//         documentCategory: string;
//     }): IDocument {
//         return {
//             name: createDocumentParams?.createProductDto?.contractName ?? null,
//             link: createDocumentParams?.createProductDto?.documentLink?.trim()
//                 ? createDocumentParams?.createProductDto?.documentLink?.trim()
//                 : null,
//             linkKey: createDocumentParams?.createProductDto?.documentKey?.trim()
//                 ? createDocumentParams?.createProductDto?.documentKey?.trim()
//                 : null,
//             clientId: createDocumentParams?.user?.clientId,
//             productId: createDocumentParams?.productId,
//             docCategory: createDocumentParams?.documentCategory,
//             created_by: createDocumentParams?.user?.userId,
//             linksToShare: createDocumentParams?.createProductDto?.linksToShare,
//         };
//     }

//     static constructCreateProductEmployeeObject(
//         createProductEmployeeDto: CreateProductEmployeeDto,
//         user: IUser
//     ): ICreateProductEmployeeObject[] {
//         const productEmployeeDTO = [];
//         for (const dto of createProductEmployeeDto?.assignedEmployees) {
//             const obj = {
//                 productId: createProductEmployeeDto?.productId,
//                 rateSheetId: createProductEmployeeDto?.rateSheetId,
//                 teamRateId: dto?.teamRateId,
//                 employeeRoleId: dto?.employeeRoleId,
//                 clientId: user?.clientId,
//                 created_by: user?.userId,
//                 employeeId: dto?.employeeId,
//                 internalRate: dto?.internalRate,
//                 billRate: dto?.billRate,
//                 employmentStatus: dto?.employmentStatus,
//                 startDate: new DateHelper().stringDateToDateZoneToUTC(dto?.startDate, 'UTC'),
//                 endDate: dto?.endDate ? new DateHelper().stringDateToDateZoneToUTC(dto?.endDate, 'UTC') : null,
//             };
//             productEmployeeDTO.push(obj);
//         }
//         return productEmployeeDTO;
//     }

//     static constructCreateResourceCategoryObj(
//         createResourceCategoryDto: CreateResourceCategoryDto,
//         user: IUser
//     ): IResourceCategory {
//         const createdByOid = MongooseHelper.getInstance().makeMongooseId(user?.clientId);

//         return {
//             name: createResourceCategoryDto?.name,
//             image: createResourceCategoryDto?.image,
//             description: createResourceCategoryDto?.description,
//             clientId: createdByOid,
//             created_by: createdByOid,
//         };
//     }

//     static constructUpdateResourceCategoryObj(
//         updateResourceCategoryDto: UpdateResourceCategoryDto,
//         user: IUser
//     ): IResourceCategory {
//         const createdByOid = MongooseHelper.getInstance().makeMongooseId(user?.clientId);

//         return {
//             name: updateResourceCategoryDto?.name,
//             image: updateResourceCategoryDto?.image,
//             description: updateResourceCategoryDto?.description,
//             clientId: createdByOid,
//             created_by: createdByOid,
//         };
//     }

//     static constructCreateResourceTypeObj(
//         CreateResourceTypeDto: CreateResourceTypeDto,
//         user: IUser
//     ): IConstructCreateResourceTypeObj {
//         const createdByOid = MongooseHelper.getInstance().makeMongooseId(user?.clientId);
//         const resourceCategoryOid = MongooseHelper.getInstance().makeMongooseId(
//             CreateResourceTypeDto?.resourceCategory
//         );

//         return {
//             name: CreateResourceTypeDto?.name,
//             description: CreateResourceTypeDto?.description,
//             resourceCategory: resourceCategoryOid,
//             clientId: createdByOid,
//             created_by: createdByOid,
//         };
//     }

//     static constructCreateResourceObj(createResourceDto: CreateResourceDto, user: IUser): IConstructCreateResourceObj {
//         const createdByOid = MongooseHelper.getInstance().makeMongooseId(user?.clientId);
//         const resourceProductIdOid = MongooseHelper.getInstance().makeMongooseId(createResourceDto?.productId);
//         const resourceCategoryOid = MongooseHelper.getInstance().makeMongooseId(createResourceDto?.categoryId);
//         const resourceTypeOid = MongooseHelper.getInstance().makeMongooseId(createResourceDto?.typeId);
//         const toolOid = MongooseHelper.getInstance().makeMongooseId(createResourceDto?.toolId);

//         let links = [];
//         if (createResourceDto?.links) {
//             links = createResourceDto?.links?.split(',');
//         }

//         return {
//             name: createResourceDto?.name ?? '',
//             productId: resourceProductIdOid ?? '',
//             categoryId: resourceCategoryOid ?? '',
//             typeId: resourceTypeOid ?? '',
//             toolId: toolOid ?? '',
//             toolPurpose: createResourceDto?.toolPurpose ?? '',
//             instruction: createResourceDto?.instruction ?? '',
//             files: createResourceDto?.files ?? [],
//             links: links ?? [],
//             cloudLinks: createResourceDto?.cloudLinks ?? [],
//             cloudFiles: [],
//             clientId: createdByOid,
//             created_by: createdByOid,
//         };
//     }

//     static constructUpdateResourceObj(updateResourceDto: EditResourceDto, user: IUser): IConstructCreateResourceObj {
//         const createdByOid = MongooseHelper.getInstance().makeMongooseId(user?.clientId);
//         const resourceProductIdOid = MongooseHelper.getInstance().makeMongooseId(updateResourceDto?.productId);
//         const resourceCategoryOid = MongooseHelper.getInstance().makeMongooseId(updateResourceDto?.categoryId);
//         const resourceTypeOid = MongooseHelper.getInstance().makeMongooseId(updateResourceDto?.typeId);
//         const toolOid = MongooseHelper.getInstance().makeMongooseId(updateResourceDto?.toolId);
//         let links = [];
//         if (updateResourceDto?.links) {
//             links = updateResourceDto?.links?.split(',');
//         }

//         return {
//             name: updateResourceDto?.name ?? '',
//             productId: resourceProductIdOid ?? '',
//             categoryId: resourceCategoryOid ?? '',
//             typeId: resourceTypeOid ?? '',
//             toolId: toolOid ?? '',
//             toolPurpose: updateResourceDto?.toolPurpose ?? '',
//             instruction: updateResourceDto?.instruction ?? '',
//             files: updateResourceDto?.files ?? [],
//             links: links ?? [],
//             cloudLinks: updateResourceDto?.cloudLinks ?? [],
//             cloudFiles: [],
//             clientId: createdByOid,
//             created_by: createdByOid,
//         };
//     }

//     // construct account integration object
//     static async constructAccIntegrationObject(integrationParams: {
//         response: IIntegrationResponse;
//         data: IAccIntegrationCred;
//         user: IUser;
//     }): Promise<any> {
//         return {
//             acc_clientId: integrationParams?.data?.clientId
//                 ? DataSecurityHelper.encrypt(integrationParams?.data?.clientId)
//                 : '',
//             acc_clientSecret: integrationParams?.data?.clientSecret
//                 ? DataSecurityHelper.encrypt(integrationParams?.data?.clientSecret)
//                 : '',
//             acc_refreshToken: integrationParams?.response?.refresh_token
//                 ? DataSecurityHelper.encrypt(integrationParams?.response?.refresh_token)
//                 : '',
//             acc_accessToken: integrationParams?.response?.access_token
//                 ? DataSecurityHelper.encrypt(integrationParams?.response?.access_token)
//                 : '',
//             acc_code: integrationParams?.data?.code ? DataSecurityHelper.encrypt(integrationParams?.data?.code) : '',
//             clientId: integrationParams?.user?.clientId ?? '',
//             created_by: integrationParams?.user?.userId ?? '',
//             acc_organizationId: integrationParams?.data?.organizationId
//                 ? DataSecurityHelper.encrypt(integrationParams?.data?.organizationId)
//                 : '',
//             acc_redirectUri: integrationParams?.data?.redirect_uri ?? '',
//             name: integrationParams?.data?.name ?? '',
//             fin_marketplaceId: integrationParams?.data?.fin_marketplaceId ?? '',
//         };
//     }

//     static constructPaymentIntegrationObj(
//         paymentIntegrationDto: PaymentIntegrationDto,
//         user: IUser,
//         financialConfigId: any
//     ): IPaymentIntegration {
//         return {
//             name: paymentIntegrationDto?.name ?? '',
//             // secretKey: paymentIntegrationDto?.secretKey
//             //     ? DataSecurityHelper.encrypt(paymentIntegrationDto?.secretKey)
//             //     : '',
//             // publishableKey: paymentIntegrationDto?.publishableKey
//             //     ? DataSecurityHelper.encrypt(paymentIntegrationDto?.publishableKey)
//             //     : '',
//             connectAccountId: paymentIntegrationDto?.connectAccountId ? paymentIntegrationDto?.connectAccountId : '',
//             status: ConfigStatus.CONNECTED,
//             clientId: user?.clientId ?? '',
//             created_by: user?.userId ?? '',
//             fin_marketplaceId: paymentIntegrationDto?.fin_marketplaceId,
//             financialConfigId: financialConfigId ?? null,
//         };
//     }

//     // decrypt accounting integration data
//     static constructDecryptedIntegration(integration: IAccountIntegration): IDecryptedIntegration {
//         return {
//             ...integration,
//             acc_clientId: DataSecurityHelper.decrypt(integration?.acc_clientId),
//             acc_clientSecret: DataSecurityHelper.decrypt(integration?.acc_clientSecret),
//             acc_refreshToken: DataSecurityHelper.decrypt(integration?.acc_refreshToken),
//             acc_accessToken: DataSecurityHelper.decrypt(integration?.acc_accessToken),
//             acc_code: DataSecurityHelper.decrypt(integration?.acc_code),
//             acc_organizationId: DataSecurityHelper.decrypt(integration?.acc_organizationId),
//             acc_customViewId: integration?.acc_customViewId
//                 ? DataSecurityHelper.decrypt(integration?.acc_customViewId)
//                 : '',
//         };
//     }

//     // Create Ledger
//     static constructCreateLedgerConfigObject(
//         user: IUser,
//         ledgerConfig: CreateLedgerDto,
//         accountNames: IAccountNames
//     ): ILedgerConfigObj {
//         return {
//             softwareSubscription: ledgerConfig?.softwareSubscription ?? '',
//             softwareSubscriptionName: accountNames?.softwareSubscriptionName ?? '',
//             consultingFee: ledgerConfig?.consultingFee ?? '',
//             consultingFeeName: accountNames?.consultingFeeName ?? '',
//             income_technologiesFee: ledgerConfig?.income_technologiesFee ?? '',
//             income_technologiesFeeName: accountNames?.income_technologiesFeeName ?? '',
//             merchantFee: ledgerConfig?.merchantFee ?? '',
//             merchantFeeName: accountNames?.merchantFeeName ?? '',
//             expense_technologiesFee: ledgerConfig?.expense_technologiesFee ?? '',
//             expense_technologiesFeeName: accountNames?.expense_technologiesFeeName ?? '',
//             operatingAccount: ledgerConfig?.operatingAccount ?? '',
//             operatingAccountName: accountNames?.operatingAccountName ?? '',
//             clientId: user?.clientId,
//             status: StatusEnum.ACTIVE,
//             created_by: user?.userId,
//             studioId: user?.studioIds[0] ?? null,
//         };
//     }

//     // Update Ledger
//     static constructUpdateLedgerConfigObject(
//         ledgerConfig: UpdateLedgerDto,
//         existingLedger: IUpdateLedger
//     ): IUpdateLedger {
//         return {
//             automaticAccount: ledgerConfig?.automaticAccount ?? existingLedger?.automaticAccount,
//             softwareSubscription: ledgerConfig?.softwareSubscription ?? existingLedger?.softwareSubscription,
//             consultingFee: ledgerConfig?.consultingFee ?? existingLedger?.consultingFee,
//             income_technologiesFee: ledgerConfig?.income_technologiesFee ?? existingLedger?.income_technologiesFee,
//             merchantFee: ledgerConfig?.merchantFee ?? existingLedger?.merchantFee,
//             expense_technologiesFee: ledgerConfig?.expense_technologiesFee ?? existingLedger?.expense_technologiesFee,
//             operatingAccount: ledgerConfig?.operatingAccount ?? existingLedger?.operatingAccount,
//         };
//     }

//     static constructAISettingsObj(user: IUser, createAISettingsDto: CreateAISettingsDto): IAISettingsResponse {
//         return {
//             temperature: createAISettingsDto?.temperature ?? 0,
//             topP: createAISettingsDto?.topP ?? 0,
//             model: createAISettingsDto?.model?.trim() ?? '',
//             instructions: createAISettingsDto?.instructions?.trim() ?? '',
//             created_by: user?.userId,
//         };
//     }

//     static constructSkillSettingsObj(user: IUser, createSkillsSettingsDto: CreateSkillDto): ISkillsSettingsResponse {
//         const clientOid = MongooseHelper.getInstance().makeMongooseId(user?.clientId);
//         return {
//             name: createSkillsSettingsDto?.name?.trim() ?? '',
//             clientId: clientOid,
//             created_by: clientOid,
//         };
//     }

//     static constructLogoObj(user: IUser, s3Response: any) {
//         const clientOid = MongooseHelper.getInstance().makeMongooseId(user?.clientId);

//         return {
//             image: s3Response?.Location,
//             key: s3Response?.key,
//             clientId: clientOid,
//             created_by: clientOid,
//         };
//     }

//     static async constructCreateStudioObject(
//         user: IUser,
//         createStudioDto: CreateStudioDto,
//         address: IAddress,
//         billingInfo: IBillingInfo
//     ) {
//         let ein: string;
//         if (createStudioDto?.ein) {
//             const hashedEin = await EINSecureHelper.getEinHashed(createStudioDto?.ein);
//             ein = hashedEin;
//         }

//         return {
//             logo: createStudioDto?.logo ?? '',
//             name: createStudioDto?.name ?? '',
//             email: createStudioDto?.email ?? '',
//             invoiceEmail: createStudioDto?.invoiceEmail ?? null,
//             supportEmail: createStudioDto?.supportEmail ?? null,
//             phone: createStudioDto?.phone ?? '',
//             ein: ein ?? '',
//             billingInfoId: billingInfo?._id ?? '',
//             subscriptionId: null,
//             userId: null,
//             addressId: address?._id,
//             clientId: user?.clientId,
//             created_by: user?.userId,
//         };
//     }

//     static async constructUpdateStudioObject(
//         studio: IStudio,
//         updateStudioDto: UpdateStudioDto,
//         subscription: ISubscribe
//     ) {
//         if (updateStudioDto?.logo !== studio?.logo) {
//             await DeleteImageFromS3(studio?.logo);
//         }

//         return {
//             logo: updateStudioDto?.logo ?? '',
//             name: updateStudioDto?.name ?? '',
//             email: updateStudioDto?.email ?? '',
//             invoiceEmail: updateStudioDto?.invoiceEmail ?? '',
//             supportEmail: updateStudioDto?.supportEmail ?? '',
//             phone: updateStudioDto?.phone ?? '',
//             ein: updateStudioDto?.ein ?? studio?.ein,
//             userId: studio?.userId ?? null,
//             addressId: studio?.addressId,
//             billingInfoId: studio?.billingInfoId,
//             subscriptionId: subscription?._id,
//             clientId: studio?.clientId,
//             created_by: studio?.created_by,
//         };
//     }

//     static async constructUpdateStudioObjectForStudioAdmin(studio: IStudio, updateStudioDto: UpdateStudioDto) {
//         if (updateStudioDto?.logo !== studio?.logo) {
//             await DeleteImageFromS3(studio?.logo);
//         }

//         return {
//             logo: updateStudioDto?.logo ?? '',
//             name: updateStudioDto?.name ?? '',
//             email: updateStudioDto?.email ?? '',
//             invoiceEmail: updateStudioDto?.invoiceEmail ?? '',
//             supportEmail: updateStudioDto?.supportEmail ?? '',
//             phone: updateStudioDto?.phone ?? '',
//             ein: updateStudioDto?.ein ?? studio?.ein,
//             userId: studio?.userId ?? null,
//             addressId: studio?.addressId,
//             clientId: studio?.clientId,
//             created_by: studio?.created_by,
//         };
//     }

//     static constructSubscriptionPlanObject(createSubscriptionPlan: CreateSubscriptionPlanDto, user: IUser) {
//         return {
//             type: createSubscriptionPlan?.type ?? '',
//             rate: createSubscriptionPlan?.rate ?? '',
//             clientId: user?.clientId,
//             created_by: user?.userId,
//         };
//     }

//     static constructSubscriptionObject(createSubscription: SubscriptionDto, user: IUser) {
//         return {
//             studioId: createSubscription?.studioId ?? '',
//             subscriptionPlanId: createSubscription?.subscriptionPlanId ?? '',
//             status: createSubscription?.status ?? SubscriptionStatusEnum.ACTIVE,
//             clientId: user?.clientId,
//             created_by: user?.userId,
//         };
//     }
// }
