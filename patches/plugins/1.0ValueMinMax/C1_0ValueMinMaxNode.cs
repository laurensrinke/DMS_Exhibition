#region usings
using System;
using System.ComponentModel.Composition;

using VVVV.PluginInterfaces.V1;
using VVVV.PluginInterfaces.V2;
using VVVV.Utils.VColor;
using VVVV.Utils.VMath;

using VVVV.Core.Logging;
#endregion usings

namespace VVVV.Nodes
{
	#region PluginInfo
	[PluginInfo(Name = "MinMax", Category = "Value", Version = "1.0", Help = "Basic template with one value in/out", Tags = "")]
	#endregion PluginInfo
	public class C1_0ValueMinMaxNode : IPluginEvaluate
	{
		#region fields & pins
		[Input("Input", DefaultValue = 1.0)]
		public ISpread<double> FInput;
		
		[Input("Reset", DefaultValue = 0, IsBang = true)]
		public ISpread<bool> FReset;
		
		double[] FInputOldMin = new double[] {};
		double[] FInputOldMax = new double[] {};

		[Output("Min")]
		public ISpread<double> FOutputMin;
		
		[Output("Max")]
		public ISpread<double> FOutputMax;

		[Import()]
		public ILogger FLogger;
		#endregion fields & pins

		//called when data for any output pin is requested
		public void Evaluate(int SpreadMax)
		{
			FOutputMin.SliceCount = SpreadMax;
			FOutputMax.SliceCount = SpreadMax;
			
	for (int i = 0; i < SpreadMax; i++){
		
			
			if(SpreadMax!=((FInputOldMax.Length+FInputOldMin.Length)/2)){
				FInputOldMin = new double[SpreadMax];
				FInputOldMax = new double[SpreadMax];
				FInputOldMax[i] = FInput[i];
				FInputOldMin[i] = FInput[i];
			
				
			}
			else{
				
				if(FReset[i] == true){
			FInputOldMax[i] = FInput[i];
			FInputOldMin[i] = FInput[i];
					
				}
				
		
				
				
			
					if(FInput[i] < FInputOldMin[i]){
						FInputOldMin[i] = FInput[i];
					}
					if(FInput[i] > FInputOldMax[i]){
					FInputOldMax[i] = FInput[i];
						
					}
					
					
				
			FOutputMin[i] = FInputOldMin[i];
			FOutputMax[i] = FInputOldMax[i];
			
			
				
				
				
			}
		}			
			

			//FLogger.Log(LogType.Debug, "hi tty!");
		}
	}
}
