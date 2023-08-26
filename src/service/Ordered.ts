
interface JobDataProps {
  id: number;
  descricao: string;
  dataMaxima: string;
  tempoEstimado: number;
}

export default function orderedJobs(data:Array<JobDataProps>){
  const orderedArray = 
  data.sort((a,b) => new Date(a.dataMaxima).getTime() - new Date(b.dataMaxima).getTime()); 
/*
  usando o sort para ordenar o array, instanciando dataMaxima na classe Date do javascript e fazendo
  a conta de comparação para verificar qual item precisara ser feito antes para ordenar em ordem de prioridade
*/
  
  const orderJobs = [];
  let newArray : Array<number>;
  // let newArray : Array<JobDataProps>;
  let somaTempo = 0;
  newArray = []
  for(const job of orderedArray) {
    if(somaTempo + job.tempoEstimado <= 8){ //verificando a soma das horas de atividade se for <= 8 entra no if
      newArray.push(job.id); //adicionar o primeiro objeto(job) no novo array
      
      somaTempo+=job.tempoEstimado; /*soma o tempo para verificar se o tempo estimado agora + 
      tempo estimado do proximo vai ser maior ou menor que 8 verificado no "if"*/

    }else{  // se a somaTempo for maior que 8 entra no else
      orderJobs.push(newArray); // se sair do if colocar o primeiro array de objetos no array principal
      newArray=[job.id];//coloca o objeto que esta sendo verificado agora no novo array
      somaTempo = job.tempoEstimado; // o tempo estimado do objeto verificano nesse ciclo é adotado para o somaTempo
    }
  }

  if(newArray.length > 0){ 
  /* 
  esse bloco faz com que se um item não passar pelo else ele não é inserido no array 
  final então este bloco faz esse papel caso sobre 1 item
  */
    orderJobs.push(newArray);
  }
  
  /*
  obs: como no exmplo estava um array só com ID dos jobs eu coloquei job.id nas linhas 22 e 29 
  caso queira o objeto inteido basta tirar o ".id" das duas linhas comentar a linha 18 e descomentar a linha 19
  */
 
  return orderJobs;

  
}