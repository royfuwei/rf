import { jsonbWhereAliasField, jsonbFromSql } from "./jsonbFromWhere";
import { jsonbEqOperator, jsonbNeqOperator, jsonbIsNullOperator, jsonbIsNotNullOperator, jsonbContaintOperator, jsonbStartsWithOperator, jsonbEndsWithOperator, jsonbTermsOperator, jsonbRangeOperator, jsonbGteOperator, jsonbGtOperator, jsonbLteOperator, jsonbLtOperator } from "./jsonbOperator";
import { ISqlQuery, DataType, JsonbValueType } from "./type";
import { v4 as uuidv4 } from 'uuid';

export class JsonbEqQuery implements ISqlQuery {
    alias = uuidv4();
    from: string | null | undefined;
    where: string | null | undefined;

    constructor(
        jsonb: string,
        field: string,
        dataType: DataType,
        value: JsonbValueType,
    ) {
        const _aliasField = jsonbWhereAliasField[dataType](field, this.alias);
        this.from = jsonbFromSql[dataType](jsonb, field, this.alias);
        this.where = jsonbEqOperator[dataType](jsonb, _aliasField, value);
    }
}

export class JsonbNeqQuery implements ISqlQuery {
    alias = uuidv4();
    from: string | null | undefined;
    where: string | null | undefined;

    constructor(
        jsonb: string,
        field: string,
        dataType: DataType,
        value: JsonbValueType,
    ) {
        const _aliasField = jsonbWhereAliasField[dataType](field, this.alias);
        this.from = jsonbFromSql[dataType](jsonb, field, this.alias);
        this.where = jsonbNeqOperator[dataType](jsonb, _aliasField, value);
    }
}

export class JsonbIsNullQuery implements ISqlQuery {
    alias = uuidv4();
    from: string | null | undefined;
    where: string | null | undefined;

    constructor(
        jsonb: string,
        field: string,
        dataType: DataType,
        value: JsonbValueType,
    ) {
        const _aliasField = jsonbWhereAliasField[dataType](field, this.alias);
        this.from = jsonbFromSql[dataType](jsonb, field, this.alias);
        this.where = jsonbIsNullOperator[dataType](jsonb, _aliasField, value);
    }
}

export class JsonbIsNotNullQuery implements ISqlQuery {
    alias = uuidv4();
    from: string | null | undefined;
    where: string | null | undefined;

    constructor(
        jsonb: string,
        field: string,
        dataType: DataType,
        value: JsonbValueType,
    ) {
        const _aliasField = jsonbWhereAliasField[dataType](field, this.alias);
        this.from = jsonbFromSql[dataType](jsonb, field, this.alias);
        this.where = jsonbIsNotNullOperator[dataType](jsonb, _aliasField, value);
    }
}

export class JsonbContaintQuery implements ISqlQuery {
    alias = uuidv4();
    from: string | null | undefined;
    where: string | null | undefined;

    constructor(
        jsonb: string,
        field: string,
        dataType: DataType,
        value: JsonbValueType,
    ) {
        const _aliasField = jsonbWhereAliasField[dataType](field, this.alias);
        this.from = jsonbFromSql[dataType](jsonb, field, this.alias);
        this.where = jsonbContaintOperator[dataType](jsonb, _aliasField, value);
    }
}

export class JsonbStartsWithQuery implements ISqlQuery {
    alias = uuidv4();
    from: string | null | undefined;
    where: string | null | undefined;

    constructor(
        jsonb: string,
        field: string,
        dataType: DataType,
        value: JsonbValueType,
    ) {
        const _aliasField = jsonbWhereAliasField[dataType](field, this.alias);
        this.from = jsonbFromSql[dataType](jsonb, field, this.alias);
        this.where = jsonbStartsWithOperator[dataType](jsonb, _aliasField, value);
    }
}

export class JsonbEndsWithQuery implements ISqlQuery {
    alias = uuidv4();
    from: string | null | undefined;
    where: string | null | undefined;

    constructor(
        jsonb: string,
        field: string,
        dataType: DataType,
        value: JsonbValueType,
    ) {
        const _aliasField = jsonbWhereAliasField[dataType](field, this.alias);
        this.from = jsonbFromSql[dataType](jsonb, field, this.alias);
        this.where = jsonbEndsWithOperator[dataType](jsonb, _aliasField, value);
    }
}

export class JsonbTermsQuery implements ISqlQuery {
    alias = uuidv4();
    from: string | null | undefined;
    where: string | null | undefined;

    constructor(
        jsonb: string,
        field: string,
        dataType: DataType,
        value: JsonbValueType,
    ) {
        const _aliasField = jsonbWhereAliasField[dataType](field, this.alias);
        this.from = jsonbFromSql[dataType](jsonb, field, this.alias);
        this.where = jsonbTermsOperator[dataType](jsonb, _aliasField, value);
    }
}

export class JsonbRangeQuery implements ISqlQuery {
    alias = uuidv4();
    from: string | null | undefined;
    where: string | null | undefined;

    constructor(
        jsonb: string,
        field: string,
        dataType: DataType,
        value: JsonbValueType,
    ) {
        const _aliasField = jsonbWhereAliasField[dataType](field, this.alias);
        this.from = jsonbFromSql[dataType](jsonb, field, this.alias);
        this.where = jsonbRangeOperator[dataType](jsonb, _aliasField, value);
    }
}

export class JsonbGteQuery implements ISqlQuery {
    alias = uuidv4();
    from: string | null | undefined;
    where: string | null | undefined;

    constructor(
        jsonb: string,
        field: string,
        dataType: DataType,
        value: JsonbValueType,
    ) {
        const _aliasField = jsonbWhereAliasField[dataType](field, this.alias);
        this.from = jsonbFromSql[dataType](jsonb, field, this.alias);
        this.where = jsonbGteOperator[dataType](jsonb, _aliasField, value);
    }
}

export class JsonbGtQuery implements ISqlQuery {
    alias = uuidv4();
    from: string | null | undefined;
    where: string | null | undefined;

    constructor(
        jsonb: string,
        field: string,
        dataType: DataType,
        value: JsonbValueType,
    ) {
        const _aliasField = jsonbWhereAliasField[dataType](field, this.alias);
        this.from = jsonbFromSql[dataType](jsonb, field, this.alias);
        this.where = jsonbGtOperator[dataType](jsonb, _aliasField, value);
    }
}

export class JsonbLteQuery implements ISqlQuery {
    alias = uuidv4();
    from: string | null | undefined;
    where: string | null | undefined;

    constructor(
        jsonb: string,
        field: string,
        dataType: DataType,
        value: JsonbValueType,
    ) {
        const _aliasField = jsonbWhereAliasField[dataType](field, this.alias);
        this.from = jsonbFromSql[dataType](jsonb, field, this.alias);
        this.where = jsonbLteOperator[dataType](jsonb, _aliasField, value);
    }
}

export class JsonbLtQuery implements ISqlQuery {
    alias = uuidv4();
    from: string | null | undefined;
    where: string | null | undefined;

    constructor(
        jsonb: string,
        field: string,
        dataType: DataType,
        value: JsonbValueType,
    ) {
        const _aliasField = jsonbWhereAliasField[dataType](field, this.alias);
        this.from = jsonbFromSql[dataType](jsonb, field, this.alias);
        this.where = jsonbLtOperator[dataType](jsonb, _aliasField, value);
    }
}
