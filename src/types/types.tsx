export type Data = {
  timestamp: string;
  plataforma: string;
  linkVideo: string;
  transcripcion: string;
  horarioEnvio: HorarioEnvio;
  idVideo: idVideo;
  response: response;
  id: string;
  escenario: string;
  link: string;
  cliente: string;
  preguntas: preguntas;
};

export type preguntas = {
  map: any;
  respuesta: string;
  texto: string;
  tiempo: string;
  tipoTarea: string;
  link: string;
};

export type HorarioEnvio = {
  seconds: number;
  nanoseconds: number;
};

export type idVideo = {
  id: string;
};

export type response = {
  status: number;
  data: string;
};

export type ContextType = {
  data: Data[];
  setData: (data: Data[]) => void;
  GetDataProvider: () => void;
  isLoading: boolean;
  client: Data[];
  setClient: (client: Data[]) => void;
};

export type pregunta = {
  texto: string;
  tipoTarea: string;
  tiempo: string;
  respuesta: string;
};