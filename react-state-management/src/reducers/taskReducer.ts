export type Task = { id: string; text: string };

export type State = Task[];

export type Action =
  | { type: "add"; payload: Task }
  | { type: "remove"; payload: string };

export function taskReducer(state: State, action: Action): State {
  switch (action.type) {
    case "add":
      if (!action.payload.text.trim()) return state;
      return [...state, action.payload];
    case "remove":
      return state.filter((task) => task.id !== action.payload);
    default: {
      // I assign to never so TypeScript flags any action type left unhandled here.
      const unhandled: never = action;
      throw new Error(`Unknown action: ${JSON.stringify(unhandled)}`);
    }
  }
}
