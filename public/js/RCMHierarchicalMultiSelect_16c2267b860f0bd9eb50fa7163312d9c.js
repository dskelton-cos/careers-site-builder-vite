function RCMDefaultNodeElement(a){this._super(a)}juic.extend(RCMDefaultNodeElement,SFDefaultNodeElement,{createChildNode:function(a){return new RCMDefaultNodeElement(nodeDate)}});function RCMDefaultHierarchicalModel(a){this._super(a)}juic.extend(RCMDefaultHierarchicalModel,SFDefaultHierarchicalModel,{createChildModel:function(a){return new RCMDefaultHierarchicalModel(a)}});
function RCMHeirarchicalMultiSelect(a,b){this._super(a,new juic.Config(b,{expandedClass:"rcmHeirarchicalMSExpanded",collapsedClass:"rcmHeirarchicalMSCollapsed",childMenuContainerClass:"rcmHeirarchicalMSChildMenuContainer",toggleClass:"itemselected"}))}
juic.extend(RCMHeirarchicalMultiSelect,SFHeirarchicalMultiSelect,{setModel:function(a){this._model=Array.isArray(a)?new RCMDefaultHierarchicalModel(a):a;this._updateModel()},createChildSelect:function(a,b){return new RCMHeirarchicalMultiSelect(a,b)},renderLabel:function(a,b){this._super(a,b);if(b.isChildrenAvailable()){var c=b.getChildrenDataModel()&&b.getChildrenDataModel().size&&b.getChildrenDataModel().size();c&&a.push("("+c+")")}}});
function RCMHeirarchicalMultiSelectSelections(a){this._super(a)}juic.extend(RCMHeirarchicalMultiSelectSelections,SFHeirarchicalMultiSelectSelections,{});function RCMMultiSelectView(a,b,c){this._super(a,b,new juic.Config(c,{className:"hierarchicalSelect rcmMultiSelectView",multiSelectClassName:"hierarchicalComponent",selectionClassName:"selectionContainer"}))}
juic.extend(RCMMultiSelectView,SFMultiSelectView,{renderHtml:function(a){a.push("\x3cdiv style\x3d'width:400px;height:0px;*display:none;'\x3e\x3c/div\x3e");this._super(a)}});