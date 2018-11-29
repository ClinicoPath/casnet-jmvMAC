
// This file is an automatically generated and should not be edited

'use strict';

const options = [{"name":"data","type":"Data"},{"name":"y1","title":"Time series","type":"Variable"},{"name":"jb","type":"Bool","default":false,"title":"Jacque-Bera test (H0: normally distributed)\n"},{"name":"bTRND","type":"Bool","default":false,"title":"Bartels' rank test of trend against randomness (H0: randomness)\n"},{"name":"bSOSC","type":"Bool","default":false,"title":"Bartels' rank test of systematic oscillations against randomness (H0: randomness)\n"},{"name":"bVON","type":"Bool","default":false,"title":"Bartels' rank test [von NEUMANN's Ratio Test for Randomness] (H0: randomness)\n"},{"name":"adf","type":"Bool","default":false,"title":"Augmented Dickey-Fuller (ADF) test for stationarity (H0: not stationary)\n"},{"name":"kpssLVL","type":"Bool","default":false,"title":"Kwiatkowski-Phillips-Schmidt-Shin (KPSS) level stationarity test (H0: level stationary)\n"},{"name":"kpssTRND","type":"Bool","default":false,"title":"Kwiatkowski-Phillips-Schmidt-Shin (KPSS) trend stationarity test (H0: trend stationary)\n"},{"name":"csd","type":"Bool","default":false,"title":"Cox-Stuart test for downward trend (CSD) (H0: randomness)\n"},{"name":"csu","type":"Bool","default":false,"title":"Cox-Stuart test for upward trend (CSU) (H0: randomness)\n"},{"name":"csdu","type":"Bool","default":false,"title":"Cox-Stuart sign test (upward or downward trend) (H0: randomness)\n"}];

const view = View.extend({
    jus: "2.0",

    events: [

	]

});

view.layout = ui.extend({

    label: "Statistical Tests of Data Assumptions",
    jus: "2.0",
    type: "root",
    stage: 0, //0 - release, 1 - development, 2 - proposed
    controls: [
		{
			type: DefaultControls.VariableSupplier,
			persistentItems: false,
			stretchFactor: 1,
			controls: [
				{
					type: DefaultControls.TargetLayoutBox,
					label: "Time series",
					controls: [
						{
							type: DefaultControls.VariablesListBox,
							name: "y1",
							maxItemCount: 1,
							isTarget: true
						}
					]
				}
			]
		},
		{
			type: DefaultControls.CollapseBox,
			label: "Randomness and Normality",
			collapsed: true,
			controls: [
				{
					type: DefaultControls.CheckBox,
					name: "jb"
				},
				{
					type: DefaultControls.CheckBox,
					name: "bTRND"
				},
				{
					type: DefaultControls.CheckBox,
					name: "bSOSC"
				},
				{
					type: DefaultControls.CheckBox,
					name: "bVON"
				}
			]
		},
		{
			type: DefaultControls.CollapseBox,
			label: "Level stationarity",
			collapsed: true,
			controls: [
				{
					type: DefaultControls.CheckBox,
					name: "adf"
				},
				{
					type: DefaultControls.CheckBox,
					name: "kpssLVL"
				}
			]
		},
		{
			type: DefaultControls.CollapseBox,
			label: "Trend stationarity",
			collapsed: true,
			controls: [
				{
					type: DefaultControls.CheckBox,
					name: "kpssTRND"
				},
				{
					type: DefaultControls.CheckBox,
					name: "csd"
				},
				{
					type: DefaultControls.CheckBox,
					name: "csu"
				},
				{
					type: DefaultControls.CheckBox,
					name: "csdu"
				}
			]
		}
	]
});

module.exports = { view : view, options: options };
