// This file is generated by xresloader, please don't edit it.

#include "KindConst.h"



UKindConstHelper::UKindConstHelper() : Super()
{
    this->Loader = MakeShareable(new ConstructorHelpers::FObjectFinder<UDataTable>(TEXT("DataTable'/Game/DataTable/KindConst'")));
    UKindConstHelper::ClearRow(this->Empty);
    if (this->Loader && this->Loader->Succeeded())
    {
        this->DataTable = this->Loader->Object;
        this->DataTable->OnDataTableChanged().AddUObject(this, &UKindConstHelper::OnReload);
        OnReload();
    }
    else
    {
        this->DataTable = nullptr;
    }
}

void UKindConstHelper::OnReload()
{
    // TODO Rebuild Index
}

FName UKindConstHelper::GetRowName(FName Name)
{
    return Name;
}

FName UKindConstHelper::GetDataRowName(FName Name) const
{
    return UKindConstHelper::GetRowName(Name);
}

FName UKindConstHelper::GetTableRowName(const FKindConst& TableRow) const
{
    return GetDataRowName(TableRow.Name);
}

const FKindConst& UKindConstHelper::GetDataRowByName(const FName& Name, bool& IsValid) const
{
    IsValid = false;
    if (!this->DataTable) {
        return this->Empty;
    }

    FString Context;
    FKindConst* LookupRow = DataTable->FindRow<FKindConst>(Name, Context, false);
    if (!LookupRow) {
        return this->Empty;
    };

    IsValid = true;
    return *LookupRow;
}

const FKindConst& UKindConstHelper::GetDataRowByKey(FName Name, bool& IsValid) const
{
    return GetDataRowByName(GetDataRowName(Name), IsValid);
}

bool UKindConstHelper::ForeachRow(TFunctionRef<void (const FName& Key, const FKindConst& Value)> Predicate) const
{
    if (!this->DataTable) {
        return false;
    }

    FString Context;
    this->DataTable->ForeachRow(Context, Predicate);
    return true;
}

UDataTable* UKindConstHelper::GetRawDataTable(bool& IsValid) const
{
    IsValid = false;
    if (!this->DataTable) {
        return NULL;
    }

    IsValid = true;
    return this->DataTable;
}

void UKindConstHelper::ClearRow(FKindConst& TableRow)
{
    TableRow.Name = TEXT("");
    TableRow.Value = 0;
}

void UKindConstHelper::ClearDataRow(FKindConst& TableRow) const
{
    UKindConstHelper::ClearRow(TableRow);
}

