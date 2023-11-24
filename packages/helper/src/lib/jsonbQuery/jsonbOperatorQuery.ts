import {
    jsonbWhereAliasField,
    jsonbFromSql,
    jsonbFromAlias,
} from './jsonbFromWhere';
import {
    jsonbEqOperator,
    jsonbNeqOperator,
    jsonbIsNullOperator,
    jsonbIsNotNullOperator,
    jsonbContaintOperator,
    jsonbStartsWithOperator,
    jsonbEndsWithOperator,
    jsonbTermsOperator,
    jsonbRangeOperator,
    jsonbGteOperator,
    jsonbGtOperator,
    jsonbLteOperator,
    jsonbLtOperator,
} from './jsonbOperator';
import { ISqlQuery, DataType, JsonbValueType } from './type';
import { v4 as uuidv4 } from 'uuid';

export class JsonbEqQuery implements ISqlQuery {
    private alias = uuidv4();
    fromAlias?: string | null | undefined;
    from: string | null | undefined;
    where: string | null | undefined;

    constructor(
        jsonb: string,
        field: string,
        dataType: DataType,
        value: JsonbValueType,
    ) {
        const _aliasField = jsonbWhereAliasField[dataType](field, this.alias);
        this.fromAlias = jsonbFromAlias[dataType](field, this.alias);
        this.from = jsonbFromSql[dataType](jsonb, field);
        this.where = jsonbEqOperator[dataType](jsonb, _aliasField, value);
    }
}

export class JsonbNeqQuery implements ISqlQuery {
    private alias = uuidv4();
    fromAlias?: string | null | undefined;
    from: string | null | undefined;
    where: string | null | undefined;

    constructor(
        jsonb: string,
        field: string,
        dataType: DataType,
        value: JsonbValueType,
    ) {
        const _aliasField = jsonbWhereAliasField[dataType](field, this.alias);
        this.fromAlias = jsonbFromAlias[dataType](field, this.alias);
        this.from = jsonbFromSql[dataType](jsonb, field);
        this.where = jsonbNeqOperator[dataType](jsonb, _aliasField, value);
    }
}

export class JsonbIsNullQuery implements ISqlQuery {
    private alias = uuidv4();
    fromAlias?: string | null | undefined;
    from: string | null | undefined;
    where: string | null | undefined;

    constructor(
        jsonb: string,
        field: string,
        dataType: DataType,
        value: JsonbValueType,
    ) {
        const _aliasField = jsonbWhereAliasField[dataType](field, this.alias);
        this.fromAlias = jsonbFromAlias[dataType](field, this.alias);
        this.from = jsonbFromSql[dataType](jsonb, field);
        this.where = jsonbIsNullOperator[dataType](jsonb, _aliasField, value);
    }
}

export class JsonbIsNotNullQuery implements ISqlQuery {
    private alias = uuidv4();
    fromAlias?: string | null | undefined;
    from: string | null | undefined;
    where: string | null | undefined;

    constructor(
        jsonb: string,
        field: string,
        dataType: DataType,
        value: JsonbValueType,
    ) {
        const _aliasField = jsonbWhereAliasField[dataType](field, this.alias);
        this.fromAlias = jsonbFromAlias[dataType](field, this.alias);
        this.from = jsonbFromSql[dataType](jsonb, field);
        this.where = jsonbIsNotNullOperator[dataType](
            jsonb,
            _aliasField,
            value,
        );
    }
}

export class JsonbContaintQuery implements ISqlQuery {
    private alias = uuidv4();
    fromAlias?: string | null | undefined;
    from: string | null | undefined;
    where: string | null | undefined;

    constructor(
        jsonb: string,
        field: string,
        dataType: DataType,
        value: JsonbValueType,
    ) {
        const _aliasField = jsonbWhereAliasField[dataType](field, this.alias);
        this.fromAlias = jsonbFromAlias[dataType](field, this.alias);
        this.from = jsonbFromSql[dataType](jsonb, field);
        this.where = jsonbContaintOperator[dataType](jsonb, _aliasField, value);
    }
}

export class JsonbStartsWithQuery implements ISqlQuery {
    private alias = uuidv4();
    fromAlias?: string | null | undefined;
    from: string | null | undefined;
    where: string | null | undefined;

    constructor(
        jsonb: string,
        field: string,
        dataType: DataType,
        value: JsonbValueType,
    ) {
        const _aliasField = jsonbWhereAliasField[dataType](field, this.alias);
        this.fromAlias = jsonbFromAlias[dataType](field, this.alias);
        this.from = jsonbFromSql[dataType](jsonb, field);
        this.where = jsonbStartsWithOperator[dataType](
            jsonb,
            _aliasField,
            value,
        );
    }
}

export class JsonbEndsWithQuery implements ISqlQuery {
    private alias = uuidv4();
    fromAlias?: string | null | undefined;
    from: string | null | undefined;
    where: string | null | undefined;

    constructor(
        jsonb: string,
        field: string,
        dataType: DataType,
        value: JsonbValueType,
    ) {
        const _aliasField = jsonbWhereAliasField[dataType](field, this.alias);
        this.fromAlias = jsonbFromAlias[dataType](field, this.alias);
        this.from = jsonbFromSql[dataType](jsonb, field);
        this.where = jsonbEndsWithOperator[dataType](jsonb, _aliasField, value);
    }
}

export class JsonbTermsQuery implements ISqlQuery {
    private alias = uuidv4();
    fromAlias?: string | null | undefined;
    from: string | null | undefined;
    where: string | null | undefined;

    constructor(
        jsonb: string,
        field: string,
        dataType: DataType,
        value: JsonbValueType,
    ) {
        const _aliasField = jsonbWhereAliasField[dataType](field, this.alias);
        this.fromAlias = jsonbFromAlias[dataType](field, this.alias);
        this.from = jsonbFromSql[dataType](jsonb, field);
        this.where = jsonbTermsOperator[dataType](jsonb, _aliasField, value);
    }
}

export class JsonbRangeQuery implements ISqlQuery {
    private alias = uuidv4();
    fromAlias?: string | null | undefined;
    from: string | null | undefined;
    where: string | null | undefined;

    constructor(
        jsonb: string,
        field: string,
        dataType: DataType,
        value: JsonbValueType,
    ) {
        const _aliasField = jsonbWhereAliasField[dataType](field, this.alias);
        this.fromAlias = jsonbFromAlias[dataType](field, this.alias);
        this.from = jsonbFromSql[dataType](jsonb, field);
        this.where = jsonbRangeOperator[dataType](jsonb, _aliasField, value);
    }
}

export class JsonbGteQuery implements ISqlQuery {
    private alias = uuidv4();
    fromAlias?: string | null | undefined;
    from: string | null | undefined;
    where: string | null | undefined;

    constructor(
        jsonb: string,
        field: string,
        dataType: DataType,
        value: JsonbValueType,
    ) {
        const _aliasField = jsonbWhereAliasField[dataType](field, this.alias);
        this.fromAlias = jsonbFromAlias[dataType](field, this.alias);
        this.from = jsonbFromSql[dataType](jsonb, field);
        this.where = jsonbGteOperator[dataType](jsonb, _aliasField, value);
    }
}

export class JsonbGtQuery implements ISqlQuery {
    private alias = uuidv4();
    fromAlias?: string | null | undefined;
    from: string | null | undefined;
    where: string | null | undefined;

    constructor(
        jsonb: string,
        field: string,
        dataType: DataType,
        value: JsonbValueType,
    ) {
        const _aliasField = jsonbWhereAliasField[dataType](field, this.alias);
        this.fromAlias = jsonbFromAlias[dataType](field, this.alias);
        this.from = jsonbFromSql[dataType](jsonb, field);
        this.where = jsonbGtOperator[dataType](jsonb, _aliasField, value);
    }
}

export class JsonbLteQuery implements ISqlQuery {
    private alias = uuidv4();
    fromAlias?: string | null | undefined;
    from: string | null | undefined;
    where: string | null | undefined;

    constructor(
        jsonb: string,
        field: string,
        dataType: DataType,
        value: JsonbValueType,
    ) {
        const _aliasField = jsonbWhereAliasField[dataType](field, this.alias);
        this.fromAlias = jsonbFromAlias[dataType](field, this.alias);
        this.from = jsonbFromSql[dataType](jsonb, field);
        this.where = jsonbLteOperator[dataType](jsonb, _aliasField, value);
    }
}

export class JsonbLtQuery implements ISqlQuery {
    private alias = uuidv4();
    fromAlias?: string | null | undefined;
    from: string | null | undefined;
    where: string | null | undefined;

    constructor(
        jsonb: string,
        field: string,
        dataType: DataType,
        value: JsonbValueType,
    ) {
        const _aliasField = jsonbWhereAliasField[dataType](field, this.alias);
        this.fromAlias = jsonbFromAlias[dataType](field, this.alias);
        this.from = jsonbFromSql[dataType](jsonb, field);
        this.where = jsonbLtOperator[dataType](jsonb, _aliasField, value);
    }
}
