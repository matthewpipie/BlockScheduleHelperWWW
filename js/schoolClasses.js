/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var schoolClasses = {

	schoolClasses: [],

	updateClassList: function() {
		var $classtable = $("#classtable");
		$classtable.html("<tr><th>Class</th></tr>");
		for (var i = 0; i < schoolClasses.schoolClasses.length; i++) {
//TODO:
//look for proper actual class in localforage(classes)
//
			$classtable.append("<tr class='rowid' id='row" + schoolClasses.schoolClasses[i]['id'] +
				"'><td style='background: " + schoolClasses.schoolClasses[i]['bgcolor'] +
				"; color: " + (schoolClasses.schoolClasses[i]['whiteText'] ? "white" : "black") +
				";'>" + schoolClasses.schoolClasses[i]['className'] +
				(schoolClasses.schoolClasses[i]['room'] == "" ? "" : " (" + schoolClasses.schoolClasses[i]['room'] + ")") +
				"</td></tr>");
		}
			
	},

	deviceready: function() {
		console.log('moo');
		localforage.getItem('schoolClasses').then(function(value4) {
			schoolClasses.loadClasses(value4);
			console.log(value4);
			schoolClasses.updateClassList();
		});
	},

	loadClasses: function(value4) {
		if (value4 == undefined) {
			localforage.setItem('schoolClasses', []);
			value4 = [];
		}
		schoolClasses.schoolClasses = value4; //[{className: "Math", bgcolor: "#123456", id: 4, whiteText: false, room: "M169"}]
	},

	pagecontainerbeforeshow: function() {
	}

};

