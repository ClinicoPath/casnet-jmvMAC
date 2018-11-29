
// This file is an automatically generated and should not be edited

'use strict';

const options = [{"name":"data","type":"Data"},{"name":"y1","title":"Variable 1","type":"Variable","rejectUnusedLevels":false,"suggested":["nominal","continuous"],"permitted":["factor","numeric"],"default":null,"description":{"R":"An unordered categorical state variable"}},{"name":"y2","title":"Variable 2","type":"Variable","rejectUnusedLevels":false,"suggested":["nominal","continuous"],"permitted":["factor","numeric"],"default":null,"description":{"R":"An unordered categorical state variable"}},{"name":"time","title":"Time (optional)","type":"Variable","rejectUnusedLevels":true,"suggested":["ordinal","continuous"],"permitted":["numeric"],"default":null,"description":{"R":"A variable indicating time"}},{"name":"trajectories","title":"Trajectory ID (optional)","type":"Variable","rejectUnusedLevels":true,"suggested":["ordinal","nominal"],"permitted":["factor"],"default":null,"description":{"R":"A variable indicating groups"}},{"name":"waves","title":"Waves within Trajectory ID (optional)","type":"Variable","rejectUnusedLevels":true,"suggested":["ordinal","nominal"],"permitted":["factor"],"default":null,"description":{"R":"A variable indicating measurement occasions"}},{"type":"String","name":"v1_labels","default":""},{"type":"Integer","name":"v1_Nstates","default":0},{"type":"String","name":"v2_labels","default":""},{"type":"Integer","name":"v2_Nstates","default":0},{"type":"Number","name":"MinReturns","title":"Minimum number of returns","default":2},{"type":"Number","name":"MaxReturnTime","title":"Maximum return time","default":0},{"type":"Number","name":"MaxReturnVisits","title":"Maximum number of return visits","default":0},{"type":"Number","name":"MinEventDuration","title":"Minimum event duration","default":0},{"type":"Number","name":"MinCellDuration","title":"Minimum cell duration","default":0},{"type":"Bool","name":"doWinnowing","title":"Detect Attractors?","default":false},{"type":"Number","title":"Drop in relative heterogeneity (0-1):","name":"screeCut","default":0.5}];

const view = View.extend({
    jus: "2.0",

    events: [

	]

});

view.layout = ui.extend({

    label: "Bivariate State Space Grid",
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
					controls: [
						{
							type: DefaultControls.VariablesListBox,
							name: "y1",
							maxItemCount: 1,
							isTarget: true
						}
					]
				},
				{
					type: DefaultControls.TargetLayoutBox,
					controls: [
						{
							type: DefaultControls.VariablesListBox,
							name: "y2",
							maxItemCount: 1,
							isTarget: true
						}
					]
				},
				{
					type: DefaultControls.TargetLayoutBox,
					label: "Time (optional)",
					controls: [
						{
							type: DefaultControls.VariablesListBox,
							name: "time",
							maxItemCount: 1,
							isTarget: true
						}
					]
				},
				{
					type: DefaultControls.TargetLayoutBox,
					label: "Trajectory ID (optional)",
					controls: [
						{
							type: DefaultControls.VariablesListBox,
							name: "trajectories",
							maxItemCount: 1,
							isTarget: true
						}
					]
				},
				{
					type: DefaultControls.TargetLayoutBox,
					label: "Waves within Trajectory ID (optional)",
					controls: [
						{
							type: DefaultControls.VariablesListBox,
							name: "waves",
							maxItemCount: 1,
							isTarget: true
						}
					]
				}
			]
		},
		{
			type: DefaultControls.CollapseBox,
			label: "Variable 1: Specify categories",
			collapsed: true,
			controls: [
				{
					type: DefaultControls.Label,
					label: "How many unique states can be observed for Variable 1? (optional)",
					controls: [
						{
							type: DefaultControls.TextBox,
							name: "v1_Nstates",
							label: "N unique states",
							format: FormatDef.number,
							inputPattern: "[0-9]+"
						}
					]
				},
				{
					type: DefaultControls.Label,
					label: "Provide state labels seperated by comma's (optional)",
					controls: [
						{
							type: DefaultControls.TextBox,
							name: "v1_labels",
							label: "State labels",
							format: FormatDef.string,
							width: "largest"
						}
					]
				}
			]
		},
		{
			type: DefaultControls.CollapseBox,
			label: "Variable 2: Specify categories",
			collapsed: true,
			controls: [
				{
					type: DefaultControls.Label,
					label: "How many unique states can be observed for Variable 2? (optional)",
					controls: [
						{
							type: DefaultControls.TextBox,
							name: "v2_Nstates",
							label: "N unique states",
							format: FormatDef.number,
							inputPattern: "[0-9]+"
						}
					]
				},
				{
					type: DefaultControls.Label,
					label: "Provide state labels seperated by comma's (optional)",
					controls: [
						{
							type: DefaultControls.TextBox,
							name: "v2_labels",
							label: "State labels",
							format: FormatDef.string,
							width: "largest"
						}
					]
				}
			]
		},
		{
			type: DefaultControls.CollapseBox,
			label: "State measures",
			collapsed: true,
			controls: [
				{
					type: DefaultControls.TextBox,
					name: "MinReturns",
					format: FormatDef.number,
					inputPattern: "[0-9]+"
				},
				{
					type: DefaultControls.TextBox,
					name: "MaxReturnTime",
					format: FormatDef.number,
					inputPattern: "[0-9]+"
				},
				{
					type: DefaultControls.TextBox,
					name: "MaxReturnVisits",
					format: FormatDef.number,
					inputPattern: "[0-9]+"
				},
				{
					type: DefaultControls.TextBox,
					name: "MinEventDuration",
					format: FormatDef.number,
					inputPattern: "[0-9]+"
				},
				{
					type: DefaultControls.TextBox,
					name: "MinCellDuration",
					format: FormatDef.number,
					inputPattern: "[0-9]+"
				}
			]
		},
		{
			type: DefaultControls.CollapseBox,
			label: "Detect Attractor Cells (Winnowing Procedure)",
			collapsed: true,
			controls: [
				{
					type: DefaultControls.CheckBox,
					name: "doWinnowing"
				},
				{
					type: DefaultControls.TextBox,
					name: "screeCut",
					format: FormatDef.number,
					inputPattern: "[0-9]+"
				}
			]
		}
	]
});

module.exports = { view : view, options: options };
