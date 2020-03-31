enum ActionType {
  AUTH_USER = '[AUTH] AUTH_USER',
  CREATE_USER = '[AUTH] CREATE_USER',
}

type Action<T extends ActionType, P> = {
  type: T;
  payload: P;
}

type AuthAction = Action<ActionType.AUTH_USER, { name: string }>;
type CreateAction = Action<ActionType.CREATE_USER, { id: string }>;

type RootAction = AuthAction | CreateAction;

const sayHello = (action: RootAction): String => {
  switch (action.type) {
    case ActionType.AUTH_USER:
      return `I have a user with name ${action.payload.name}`;
    case ActionType.CREATE_USER:
      return `I create a user with id ${action.payload.id}`;
    default:
      return 'default'
  }
}

sayHello({ type: ActionType.AUTH_USER, payload: { name: 'asdjflk' } })


// Типы в условных выражениях

type ResponseJson = { ok: true, data: object } | { ok: false, err: string };

const parseJson = (json: string): ResponseJson => {
  try {
    return { ok: true, data: JSON.parse(json) };
  } catch (err) {
    return { ok: false, err: 'Invalid json' };
  }
}

const parsed = parseJson('.....')
if (parsed.ok === true) {
  console.log(parsed.data);
} else {
  console.log(parsed.err);
}


// Conditional types
type Email = string | string[] | null | undefined;
type User = {
  name: string;
  id: string;
  age: number;
}

type EmailWithoutNull = NonNullable<Email>

type UserAge = Pick<User, 'age'>;
type UserWithoutAge = Omit<User, 'age'>
