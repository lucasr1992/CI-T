
interface dataProps {
  id: number;
  descricao: string;
  dataMaxima: string;
  tempoEstimado: number;
}

export default function orderedJobs(data:Array<dataProps>){
  const orderedArray = 
  data.sort((a,b) => new Date(a.dataMaxima).getTime() - new Date(b.dataMaxima).getTime()); 
/*
  usando o sort para ordenar o array, instanciando dataMaxima na classe Date do javascript e fazendo
  a conta de comparação para verificar qual item precisara ser feito antes para ordenar em ordem de prioridade
*/


  
  return orderedArray
}