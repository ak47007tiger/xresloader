// This file is generated by xresloader, please don't edit it.

// Test arr_in_arr_cfg

#include "Config/ArrInArrCfg.h"



UArrInArrCfgHelper::UArrInArrCfgHelper() : Super()
{
    this->Loader = MakeShareable(new ConstructorHelpers::FObjectFinder<UDataTable>(TEXT("DataTable'/Game/Config/ArrInArrCfg'")));
    UArrInArrCfgHelper::ClearRow(this->Empty);
    if (this->Loader && this->Loader->Succeeded())
    {
        this->DataTable = this->Loader->Object;
        this->DataTable->OnDataTableChanged().AddUObject(this, &UArrInArrCfgHelper::OnReload);
        OnReload();
    }
    else
    {
        this->DataTable = nullptr;
    }
}

void UArrInArrCfgHelper::OnReload()
{
    // TODO Rebuild Index
}

FName UArrInArrCfgHelper::GetRowName(int32 Name)
{
    return *FString::Printf(TEXT("%lld"), static_cast<long long>(Name));
}

FName UArrInArrCfgHelper::GetDataRowName(int32 Name) const
{
    return UArrInArrCfgHelper::GetRowName(Name);
}

FName UArrInArrCfgHelper::GetTableRowName(const FArrInArrCfg& TableRow) const
{
    return GetDataRowName(TableRow.Name);
}

const FArrInArrCfg& UArrInArrCfgHelper::GetDataRowByName(const FName& Name, bool& IsValid) const
{
    IsValid = false;
    if (!this->DataTable) {
        return this->Empty;
    }

    FString Context;
    FArrInArrCfg* LookupRow = DataTable->FindRow<FArrInArrCfg>(Name, Context, false);
    if (!LookupRow) {
        return this->Empty;
    };

    IsValid = true;
    return *LookupRow;
}

const FArrInArrCfg& UArrInArrCfgHelper::GetDataRowByKey(int32 Name, bool& IsValid) const
{
    return GetDataRowByName(GetDataRowName(Name), IsValid);
}

bool UArrInArrCfgHelper::ForeachRow(TFunctionRef<void (const FName& Key, const FArrInArrCfg& Value)> Predicate) const
{
    if (!this->DataTable) {
        return false;
    }

    FString Context;
    this->DataTable->ForeachRow(Context, Predicate);
    return true;
}

UDataTable* UArrInArrCfgHelper::GetRawDataTable(bool& IsValid) const
{
    IsValid = false;
    if (!this->DataTable) {
        return NULL;
    }

    IsValid = true;
    return this->DataTable;
}

void UArrInArrCfgHelper::ClearRow(FArrInArrCfg& TableRow)
{
    TableRow.Name = 0;
    TableRow.Arr.Reset(0);
    TableRow.Id = 0;
}

void UArrInArrCfgHelper::ClearDataRow(FArrInArrCfg& TableRow) const
{
    UArrInArrCfgHelper::ClearRow(TableRow);
}

