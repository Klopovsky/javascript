var o=["445", 79, "398", 73, "710", 32, "398|760", 28, "398|760|779", 28, "445|446", 26, "710|1045", 25, "445|452", 24, "381", 19, "445|943", 19, "398|730", 18, "398|730|607", 18, "367", 16, "445|446|451", 15, "351", 14, "351|363", 14, "351|363|365", 14, "381|395", 14, "381|395|566", 14, "445|526", 14, "445|526|769", 14, "367|372", 12, "710|1045|1119", 11, "398|410", 10, "398|483", 9, "445|452|743", 8, "367|372|377", 7, "398|483|757", 7, "445|446|792", 7, "445|452|744", 7, "445|452|719", 6, "398|410|411", 5];

var nodeMap={};
var nodeLevels=[];
for(var i=0;i<o.length;i+=2)
{
    var catLineage=o[i].split('|');
    var cat=catLineage[catLineage.length-1];
    var depth=catLineage.length;
    while(depth>nodeLevels.length){nodeLevels.push([]);}
    nodeMap[cat]={id:cat,count:o[i+1],depth:depth,parents:catLineage.slice(0,catLineage.length-1)};
    nodeLevels[depth-1].push(cat);
}
var tree=[];
var treeNodeLookup={};
for(var i=0;i<nodeLevels.length;i++)
{
    for(var j=0;j<nodeLevels[i].length;j++)
    {
        var nodeId=nodeLevels[i][j];
        var nodeDepth=nodeMap[nodeId].depth;
        var nodeCount=nodeMap[nodeId].count;
        var parents=nodeMap[nodeId].parents;
        var pointer={children:tree};
        if(parents.length>0){pointer=treeNodeLookup[parents[0]];}
        var node={id:nodeId,count:nodeCount,children:[]};
        pointer.children.push(node);
        treeNodeLookup[nodeId]=pointer.children[pointer.children.length-1];
    }
}
console.log(tree);