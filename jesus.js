..ETEC Professor Hor�cio Augusto da Silveira
Avalia��o de Design Digital � Segundo Bimestre � Usabilidade e Padr�es de Projeto

Nome:__________________________________________________________


 
private void btbanana_Click(object sender, EventArgs e)
{
double BANANA; 
double CHOPPE;
double guaran�;string guaran�;
 try  
 
 {
	 BANANA=Convert.ToDouble(txtBANANA.Text);
 
   guaran�=Math.Sqrt(BANANA);
   
   rguaran�=Convert.ToString(guaran�); 
   
txtResultado.ext = rguaran�;
  }

 catch(FormatException){ MessageBox.Show("Formata��o Errada.");}}


1.	Organize o c�digo acima segundo o que foi explicado nas aulas de t�cnicas de programa��o afim de garantir legibilidade e sustentabilidade do c�digo.

2.	Desenhe uma classe que implemente o c�digo acima como um m�todo. 
