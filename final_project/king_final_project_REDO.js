(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_1 = function() {
	this.initialize(img.CachedBmp_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2773,1887);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.sparkles = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(15,1,1).p("AAAaTQAFhSgChPQABgPABgPIABgVQAChBAAg/QgU0W5rgpQZLAAAs6SQAaZmZ5AsQ5UABg3U+A6SAAIAbAA");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("A6ECqQZKgBAt6RQAZZlZ5AtQ5UABg2U+QgV0W5qgpg");
	this.shape_1.setTransform(1.375,-17);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFF00").ss(15,1,1).p("A5ZmzIAbAIAmzZaQAahPAThMQAEgOAFgPIAHgTQATg/APg9QE9zv4nnPQYUGfHe5NQmQY1Y2HYQ4emjmQUC");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("A5LkIQYUGfHd5MQmPY0Y1HYQ4dmjmQUCQE9zv4nnPg");
	this.shape_3.setTransform(1.325,-16.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFF00").ss(15,1,1).p("A6SAAIAbAAQZLAAAs6SQAaZmZ5AsQ5UABg3U+QgU0W5rgpAAAaTQAFhSgChPQABgPABgPIABgVQAChBAAg/");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175.8,-175.8,351.6,351.6);


(lib.portal_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(8,1,1).p("EAHvggLQAAAdgUAVQgVAUgdAAQgdAAgUgUQgVgVAAgdQAAgdAVgUQAUgVAdAAQAdAAAVAVQAUAUAAAdgAQQvBQAAAogcAdQgdAcgoAAQgpAAgcgcQgdgdAAgoQAAgpAdgcQAcgdApAAQAoAAAdAdQAcAcAAApgAGkBuQAAMsiCI+QiCI+i4AAQi5AAiCo+QiCo+AAssQAAsrCCo+QCCo+C5AAQC4AACCI+QCCI+AAMrgAMCj7QAAAogcAdQgdAcgoAAQgpAAgcgcQgdgdAAgoQAAgpAdgcQAcgdApAAQAoAAAdAdQAcAcAAApgAQpqYQAAAbgTATQgTATgbAAQgbAAgTgTQgTgTAAgbQAAgbATgTQATgTAbAAQAbAAATATQATATAAAbgAPPKoQAAAygjAjQgjAjgyAAQgxAAgkgjQgjgjAAgyQAAgxAjgkQAkgjAxAAQAyAAAjAjQAjAkAAAxgARlPFQAAAjgZAZQgZAZgjAAQgjAAgZgZQgZgZAAgjQAAgjAZgZQAZgZAjAAQAjAAAZAZQAZAZAAAjgAK3QuQAAAdgUAVQgVAUgdAAQgdAAgUgUQgVgVAAgdQAAgdAVgUQAUgVAdAAQAdAAAVAVQAUAUAAAdgAAtCgQAAGjgZEnQgYEogjAAQgjAAgZkoQgZknAAmjQAAmhAZkoQAZkoAjAAQAjAAAYEoQAZEoAAGhgAEBB6QAAJvhUG5QhTG4h2AAQh3AAhTm4QhUm5AApvQAApuBUm4QBTm5B3AAQB2AABTG5QBUG4AAJugAsG1UQAABAguAuQgtAthAAAQhAAAgugtQgtguAAhAQAAhAAtgtQAuguBAAAQBAAAAtAuQAuAtAABAgAqJv9QAAAcgUATQgUAUgcAAQgcAAgUgUQgTgTAAgcQAAgcATgUQAUgUAcAAQAcAAAUAUQAUAUAAAcgAuhs/QAAAogdAdQgcAcgpAAQgoAAgdgcQgcgdAAgoQAAgpAcgcQAdgdAoAAQApAAAcAdQAdAcAAApgAo+T2QAAAdgVAVQgUAUgdAAQgdAAgVgUQgUgVAAgdQAAgdAUgUQAVgVAdAAQAdAAAUAVQAVAUAAAdgAqOapQAAAbgTATQgTATgbAAQgbAAgTgTQgTgTAAgbQAAgbATgTQATgTAbAAQAbAAATATQATATAAAbgAnGfaQAAAxgkAjQgjAkgxAAQgyAAgjgkQgjgjAAgxQAAgyAjgjQAjgjAyAAQAxAAAjAjQAkAjAAAyg");
	this.shape.setTransform(2.5,-10.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6600").s().p("EgKTAguQgjgjAAgxQAAgyAjgjQAjgjAyAAQAyAAAjAjQAjAjAAAyQAAAxgjAjQgjAkgyAAQgyAAgjgkgAr9bXQgTgTAAgbQAAgbATgTQATgTAbAAQAbAAATATQATATAAAbQAAAbgTATQgTATgbAAQgbAAgTgTgAq2UoQgUgVAAgdQAAgdAUgUQAVgVAdAAQAdAAAUAVQAVAUAAAdQAAAdgVAVQgUAUgdAAQgdAAgVgUgAhjNqQgZknAAmjQAAmhAZkoQAZkoAjAAQAjAAAYEoQAZEoAAGhQAAGjgZEnQgYEogjAAQgjAAgZkogAI/RgQgUgVAAgdQAAgdAUgUQAVgVAdAAQAdAAAUAVQAVAUAAAdQAAAdgVAVQgUAUgdAAQgdAAgVgUgAPUQBQgZgZAAgjQAAgjAZgZQAZgZAjAAQAjAAAZAZQAZAZAAAjQAAAjgZAZQgZAZgjAAQgjAAgZgZgAMCL9QgjgjAAgyQAAgxAjgkQAjgjAyAAQAxAAAkAjQAjAkAAAxQAAAygjAjQgkAjgxAAQgyAAgjgjgAJbi2QgcgdAAgoQAAgpAcgcQAdgdApAAQAoAAAdAdQAcAcAAApQAAAogcAdQgdAcgoAAQgpAAgdgcgAO6pqQgTgTAAgbQAAgbATgTQATgTAbAAQAbAAATATQATATAAAbQAAAbgTATQgTATgbAAQgbAAgTgTgAxIr6QgcgdAAgoQAAgpAcgcQAdgdAoAAQApAAAdAdQAcAcAAApQAAAogcAdQgdAcgpAAQgoAAgdgcgANpt8QgcgdAAgoQAAgpAcgcQAdgdApAAQAoAAAdAdQAcAcAAApQAAAogcAdQgdAcgoAAQgpAAgdgcgAr9vOQgTgTAAgcQAAgcATgUQAUgUAdAAQAcAAATAUQAUAUAAAcQAAAcgUATQgTAUgcAAQgdAAgUgUgAwOzmQguguAAhAQAAhAAugtQAtguBAAAQBAAAAtAuQAuAtAABAQAABAguAuQgtAthAAAQhAAAgtgtgAF3/ZQgUgVAAgdQAAgdAUgUQAVgVAdAAQAdAAAVAVQAUAUAAAdQAAAdgUAVQgVAUgdAAQgdAAgVgUg");
	this.shape_1.setTransform(2.5,-10.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3300").s().p("AjJQoQhUm5AApvQAApuBUm5QBTm4B2AAQB2AABUG4QBTG5ABJuQgBJvhTG5QhUG4h2AAQh2AAhTm4gAhGqkQgZEoAAGiQAAGjAZEnQAZEoAjAAQAiAAAZkoQAZknAAmjQAAmigZkoQgZkngiAAQgjAAgZEng");
	this.shape_2.setTransform(-0.4,1.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("Ak6VqQiCo+AAssQAAsrCCo+QCCo+C4AAQC5AACBI+QCDI+AAMrQAAMsiDI+QiBI+i5AAQi4AAiCo+gAjNwaQhUG5AAJuQAAJuBUG5QBTG4B3AAQB1AABUm4QBTm5ABpuQgBpuhTm5QhUm4h1AAQh3AAhTG4g");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(8,1,1).p("EARegh2QAAAdgVAUQgUAVgdAAQgdAAgVgVQgUgUAAgdQAAgdAUgVQAVgUAdAAQAdAAAUAUQAVAVAAAdgAXzv7QAAApgdAcQgcAdgpAAQgoAAgdgdQgcgcAAgpQAAgoAcgdQAdgcAoAAQApAAAcAcQAdAdAAAogAJHBrQAAMsiDI+QiCI+i4AAQi4AAiDo+QiCo+AAssQAAsrCCo+QCDo+C4AAQC4AACCI+QCDI+AAMrgAYMrRQAAAbgTATQgTATgbAAQgbAAgTgTQgTgTAAgbQAAgbATgTQATgTAbAAQAbAAATATQATATAAAbgAXLBkQAAApgdAcQgcAdgpAAQgRAAgPgFQgUgHgRgRQgcgcAAgpQAAgoAcgdQARgQAUgHQAPgFARAAQASAAAPAFQAUAHAQAQQAMAMAIAPQAJATAAAXgAT0RKQAAAxgkAjQgEAFgFAEQggAbgrAAQgyAAgjgkQgjgjAAgxQAAgyAjgjQAjgjAyAAQArAAAgAaQAFAEAEAFQAkAjAAAygADQCeQAAGigZEoQgZEogjAAQgjAAgZkoQgZkoAAmiQAAmiAZkoQAZknAjAAQAjAAAZEnQAZEoAAGigAPcXQQAAAcgUAVIgBAAQgUAVgdAAQgdAAgVgVQgUgUAAgdQAAgdAUgVQAVgUAdAAQAdAAAUAUIABABQAUAUAAAdgAWKVnQAAAjgZAZQgZAZgjAAQgjAAgZgZQgZgZAAgjQAAgjAZgZQAZgZAjAAQAjAAAZAZQAZAZAAAjgAGjB4QAAJvhTG4QhUG5h2AAQh3AAhTm5QhTm4AApvQAApuBTm5QBTm4B3AAQB2AABUG4QBTG5AAJugA1Is9QAAApgcAcQgdAdgoAAQgpAAgcgdQgdgcAAgpQAAgoAdgdQAcgcApAAQAoAAAdAcQAcAdAAAogAt84CQAABAgtAtQguAuhAAAQhAAAgtguQgugtAAhAQAAhAAuguQAtgtBAAAQBAAAAuAtQAtAuAABAgAu/wIQAAAsgfAeQgfAggrAAQgsAAgfggQgegeAAgsQAAgrAegfQAfgfAsAAQArAAAfAfQAfAfAAArgAtUT0QAAAdgUAUQgVAVgdAAQgdAAgUgVQgVgUAAgdQAAgdAVgVQAUgUAdAAQAdAAAVAUQAUAVAAAdgAukamQAAAbgTATQgTATgbAAQgbAAgTgTQgTgTAAgbQAAgbATgTQATgTAbAAQAbAAATATQATATAAAbgEgKgAhFQAAAygjAjQgFAEgEAEQgXATgbAGQgMACgOAAQgxAAgkgjQgjgjAAgyQAAgxAjgkQAkgjAxAAQAOAAAMADQAbAFAXATQAEAEAFAEQAjAkAAAxg");
	this.shape_4.setTransform(-13.75,-10.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF6600").s().p("EgNtAiaQgigjgBgyQABgxAigkQAkgjAyAAQANAAAMADQAbAFAXATIAJAIQAjAkAAAxQAAAygjAjIgJAIQgXATgbAGQgMACgNAAQgyAAgkgjgAwSbUQgUgTABgbQgBgbAUgTQASgTAcAAQAbAAASATQATATAAAbQAAAbgTATQgSATgbAAQgcAAgSgTgANkYBQgVgUABgdQgBgdAVgVQAVgUAdAAQAcAAAVAUIAAABQAVAUgBAdQABAcgVAVIAAAAQgVAVgcAAQgdAAgVgVgAT4WjQgZgZAAgjQAAgjAZgZQAZgZAkAAQAjAAAYAZQAZAZAAAjQAAAjgZAZQgYAZgjAAQgkAAgZgZgAvLUlQgUgUgBgdQABgdAUgVQAVgUAcAAQAeAAAUAUQAVAVgBAdQABAdgVAUQgUAVgeAAQgcAAgVgVgAQnSeQgkgjABgxQgBgyAkgjQAjgjAxAAQArAAAhAaIAJAJQAkAjAAAyQAAAxgkAjIgJAJQghAbgrAAQgxAAgjgkgAA/NoQgZkoAAmiQAAmiAZkoQAZknAiAAQAkAAAZEnQAZEoAAGiQAAGigZEoQgZEogkAAQgiAAgZkogAVJDBQgUgHgRgRQgdgcABgpQgBgoAdgdQARgQAUgHQAPgFARAAQARAAAPAFQAVAHAQAQQAMAMAHAPQAJATAAAXQAAApgcAcQgcAdgpAAQgRAAgPgFgAWcqjQgSgTgBgbQABgbASgTQAUgTAaAAQAbAAAUATQATATAAAbQAAAbgTATQgUATgbAAQgaAAgUgTgA3ur4QgdgcABgpQgBgoAdgdQAdgcAoAAQApAAAcAcQAcAdAAAoQAAApgcAcQgcAdgpAAQgoAAgdgdgAVMu2QgcgcgBgpQABgoAcgdQAdgcAoAAQApAAAcAcQAcAdABAoQgBApgcAcQgcAdgpAAQgoAAgdgdgAxzu+QgegeAAgsQAAgrAegfQAggfArAAQAsAAAeAfQAfAfAAArQAAAsgfAeQgeAggsAAQgrAAgggggAyE2VQgugtAAhAQAAhAAuguQAugtA/AAQBBAAAtAtQAtAuABBAQgBBAgtAtQgtAuhBAAQg/AAgugugEAPmghFQgUgUgBgdQABgdAUgVQAVgUAcAAQAeAAAUAUQAVAVAAAdQAAAdgVAUQgUAVgeAAQgcAAgVgVg");
	this.shape_5.setTransform(-13.75,-10.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-172.5,-238.4,317.5,455.4);


(lib.play_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(10,1,1).p("AEej9QARAJAPAPQApApAAA6QAAA6gpApQgpApg6AAQgnAAgfgSQgPgJgOgOQgpgpAAg6QAAg6ApgpQApgpA6AAQAlAAAeARQA+glBMAAQByAABRBRQBQBQAAByQAAByhQBQQhRBRhyAAQhyAAhQhRQhOhOgDhtAOfgRQAADyirCrQirCsjzAAQjyAAirisQirirAAjyQAAjyCrisQCrirDyAAQDzAACrCrQCrCsAADygAW1AAQAAJdmsGsQmsGspdAAQpcAAmsmsQmsmsAApdQAApcGsmsQGsmsJcAAQJdAAGsGsQGsGsAAJcg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AjCDDQhOhOgChuQAfASAnAAQA6AAApgoQApgpAAg6QAAg6gpgpQgPgPgRgJQA9glBMAAQByAABQBRQBRBQAABxQAAByhRBRQhQBQhyAAQhxAAhRhQg");
	this.shape_1.setTransform(42.4,-1.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AmdGdQirirAAjyQAAjyCrirQCsirDxAAQDzAACqCrQCsCrAADyQAADyisCrQiqCsjzAAQjxAAisisgAjdjTQgpApAAA6QAAA6ApApQANANAQAJQACBuBOBOQBRBQBxAAQByAABQhQQBRhRAAhyQAAhxhRhQQhQhRhyAAQhNAAg8AlQgegRglAAQg6AAgpApg");
	this.shape_2.setTransform(34.2,-1.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AwIQIQmrmrgBpdQABpcGrmsQGsmrJcgBQJdABGrGrQGtGsAAJcQAAJdmtGrQmrGtpdAAQpcAAmsmtgAhHmuQirCrAADzQAADxCrCrQCrCsDyAAQDzAACqisQCsirAAjxQAAjzisirQiqirjzAAQjyAAirCrgACVgHQgQgKgNgOQgpgpAAg6QAAg5ApgqQApgpA6AAQAlABAeAQQARAJAPAPQApAqAAA5QAAA6gpApQgpApg6AAQgnAAgfgRg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.play_btn, new cjs.Rectangle(-151,-151,302.1,302.1), null);


(lib.pitchfork = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0000").s().p("EAAAAhNIgeoKIgDhFIgEhJQgFh7gGjHIgIlnQgEjPgCixIAAsXQACipADjDIpJAAQgPAHgRgBQgagCgSgVQgSgVACgbIABgLIA/szIABAAIABAAIA7L9IIrAAIAGj5QAGjHAFh7IAEhJIADhFIAeoKIAAAAIABAAIAfIKIADBFIADBJQAFB7AGDHIAGD5IIrAAIA7rpIABAAIABAAIA/MfIABALIAAALQgCAbgVARQgUASgbgCQgMgBgKgFIpJAAQAEDDABCpIAAMXQgBCxgEDPIgJFnQgGDHgFB7IgDBJIgDBFIgfIKIgBAAg");
	this.shape.setTransform(-0.01,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("EgAbAlEIgfoJIgDhGIgDhJQgFh6gGjIIgJlnQgEjOgBixIAAsYQABioAEjDIpJAAQgPAHgRgCQgbgCgRgVQgSgUACgbIABgLIA/szIABgBIABABIA7L9IIrAAIAGj5QAGjIAFh6IADhJIADhGIAfoJIABgBIABABIAdIJIADBGIAEBJQAFB6AGDIIAGD5IIrAAIA7rpIAAgBIACABIA/MfIABALIAAAKQgCAbgVASQgVARgbgCQgMAAgKgFIpIAAQADDDACCoIAAMYQgCCxgEDOIgIFnQgGDIgFB6IgEBJIgDBGIgdIJIgBABgAxCboIi5p+QgribgpicQggh8g5jgQgqingxjNIhbmBIhYmDQgwjcgdiHIo6CDQgNAKgRACQgaAEgWgQQgVgPgEgZIgBgCQgCgHAAgHIh6spQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIDlLcIIdh8Igyj1QgfiYgfikIhxqPQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAABAAAAIC5J+QArCbApCcIA+DyIIdh9IhurjQgBAAAAAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAABAAAAIDyL+IACAFIAAABIAAAAIABACIACAKQAEAbgQAWQgQAWgbADQgLACgLgCIo7CEQAnCXAwDKQAfB/A8EDQAzDZAlCoQAnCwAqDHQAfCSApDOQAeCSAgCpIBxKQQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIAAAAIgBgBgARGboIBxqQQAgipAdiSQAqjOAfiSQApjHAoiwQAlioAyjZQA8kDAfh/QAxjKAmiXIo6iEQgQAEgRgGQgZgIgNgYQgMgYAIgaID5saIABAAQAAAAAAAAQABAAAAAAQAAAAAAABQgBAAAAAAIhyL2IIcB9IA/jyQApicAqibIC6p+IABgBQAAAAAAABQABAAAAAAQAAAAAAAAQgBAAAAAAIggDLIhRHEQgfCkgeCYIgyD1IIcB8IDhrIIABgBQABAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAIh2MWIgCANIAAADIgCAIQgIAZgYANQgYAMgagIQgMgDgIgHIo6iDQgcCHgxDcIhXGDIhbGBQgyDNgqCnQg4DgghB8QgpCcgqCbIi6J+IgBABQAAAAAAAAQgBAAAAAAQAAAAAAgBQABAAAAAAg");
	this.shape_1.setTransform(2.725,-24.745);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-256.7,-262,518.9,474.6);


(lib.halo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// halo
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFCC00").ss(8,1,1).p("AUoAAQAABsmCBMQmDBMojAAQoiAAmDhMQmChMAAhsQAAhrGChMQGDhMIiAAQIjAAGDBMQGCBMAABrg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFCC00").ss(8,1,1).p("ACyl8QGZAHE5A2AT5AmQEcBFAABcQAABsmCBMQidAfi3ASAG9GkQi/AMjZAAQkQAAjogTAuQCYQiJgRh5gYQmChMAAhrQAAhrGChNQAcgFAdgFAuQl8QE4gvGTgE");
	this.shape_1.setTransform(-3.725,-3.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-163.4,-50.9,319.4,94.4);


(lib.eyeball = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// eyeball
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(8,1,1).p("AJixpQAAAhizAYQiyAXj9AAQj8AAizgXQiygYAAghQAAghCygXQCzgYD8AAQD9AACyAYQCzAXAAAhgAKADhQAABAgUAuQgVAtgdAAQgdAAgUgtQgVguAAhAQAAhAAVgtQAUguAdAAQAdAAAVAuQAUAtAABAgANfDhQAADJhiCOQhjCOiLAAQiMAAhiiOQhjiOAAjJQAAjJBjiNQBiiOCMAAQCLAABjCOQBiCNAADJgAPeDcQAAGakiEiQkiEimaAAQmZAAkikiQkikiAAmaQAAmZEikiQEikiGZAAQGaAAEiEiQEiEiAAGZg");
	this.shape.setTransform(0,-21.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AmuA4QizgXAAghQAAggCzgXQCygYD8AAQD9AACyAYQCzAXAAAgQAAAhizAXQiyAYj9AAQj8AAiygYg");
	this.shape_1.setTransform(0,-134.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgxBuQgUguAAhAQAAg/AUguQAVgtAcAAQAdAAAUAtQAVAuAAA/QAABAgVAuQgUAtgdAAQgcAAgVgtg");
	this.shape_2.setTransform(57,0.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#33CCFF").s().p("AjtFXQhjiOAAjJQAAjIBjiOQBjiOCKAAQCLAABjCOQBjCOAADIQAADJhjCOQhjCOiLAAQiKAAhjiOgAgFhtQgUAuAAA/QAABAAUAuQAUAtAcAAQAdAAAVgtQAVgugBhAQABg/gVguQgVgtgdAAQgcAAgUAtg");
	this.shape_3.setTransform(52.65,0.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Aq7K8QkikiAAmaQAAmZEikiQEikiGZAAQGaAAEiEiQEiEiAAGZQAAGakiEiQkiEimaAAQmZAAkikigAEhlRQhjCPAADHQAADKBjCNQBiCPCLgBQCMABBiiPQBjiNAAjKQAAjHhjiPQhiiOiMAAQiLAAhiCOg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyeball, new cjs.Rectangle(-103,-146.9,206,249.9), null);


(lib.flying = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {flying:0,standing:12};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_11 = function() {
		this.stop();
	}
	this.frame_13 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(11).call(this.frame_11).wait(2).call(this.frame_13).wait(1));

	// eyeball
	this.instance = new lib.eyeball();
	this.instance.setTransform(214,15.05,1,1,0,0,0,0,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14));

	// wings
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(8,1,1).p("ACynQQAigWAigTQCzhkBcBFQBHA1gKB/QAVgOAXgMQB1g/A+AvQA/AwgcCBQgcCBhmCHQhnCIh0A+Qh1A+g/gvQgOgKgJgPQgigzAXhlQAbiABniHQBShuBdg+AkpGsQhUBJhYAzQjLB1hohOQhohOA4jlQA5jlC4j0QC5j0DMh2QDLh2BoBQQA4ApAJBUAEcDnQh/CSiLBNQiyBlhchGQgdgWgQgjQghhMAhiIQAvjHCgjTQB/isCNhi");
	this.shape.setTransform(6.5008,41.3349);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AsIJPQhohOA4jlQA5jlC4j0QC5j0DMh2QDLh2BoBQQA4ApAJBUQiNBih/CsQigDTgvDHQgQBEAAA1QAAA1AQAmQhUBJhYAzQh5BGhXAAQg5AAgqgfgAj8HlQgdgWgQgjQgQgmAAg1QAAg1AQhEQAvjHCgjTQB/isCNhiQAigWAigTQCzhkBcBFQBHA1gKB/QAVgOAXgMQB1g/A+AvQA/AwgcCBQgcCBhmCHQhnCIh0A+Qh1A+g/gvQgOgKgJgPQgUgfAAgwQAAghAJgoQAbiABniHQBShuBdg+QhdA+hSBuQhnCHgbCAQgJAoAAAhQAAAwAUAfQh/CSiLBNQhoA8hMAAQg0AAgmgdgAkpGsIAAAAg");
	this.shape_1.setTransform(6.5008,41.3349);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(8,1,1).p("AIniGQAnAOAjARQC6BVgCBzQgBBYhtBCQAYAJAXAMQB4A6gCBNQgBBPh6A2Qh4A1irgDQiqgDh2g6Qh3g6ABhOQAAgRAHgRQAVg5BfgpQB5g2CpAEQCKACBoAmAnBAFQhtgZhdgoQjWhgACiCQACiCDahaQDbhYEyAFQEyAGDWBgQDYBggDCDQgBBFg/A5AnBAFQAqhHCAg1QC9hPEIAFQDXADCiA4AAzFnQjAgRiQhDQi7hVACh0QACgkATgh");
	this.shape_2.setTransform(-0.6246,-16.0555);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AHCJOQiqgDh2g6Qh3g6ABhOQAAgRAHgRQAVg5BfgpIADgCQBwgwCXAAIABAAIAAAAIARAAIABAAIACAAIADAAQCKACBoAmQhogmiKgCIgDAAIgCAAIgBAAIgRAAIAAAAIgBAAQiXAAhwAwIgDACQhfApgVA5QjAgRiQhDQi7hVACh0QACgkATghQAqhHCAg1IAHgDQCvhIDvAAIABAAIAAAAIAcABIADAAQDXADCiA4QAnAOAjARQC6BVgCBzQgBBYhtBCQAYAJAXAMQB4A6gCBNQgBBPh6A2QhyAyifAAIgSAAgAqLg8QjWhgACiCQACiCDahaQDbhYEyAFQEyAGDWBgQDYBggDCDQgBBFg/A5Qiig4jXgDIgDAAIgcgBIAAAAIgBAAQjvAAivBIIgHADQiAA1gqBHQhtgZhdgog");
	this.shape_3.setTransform(-0.6246,-16.0555);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(8,1,1).p("AkpGsQhUBJhYAzQjLB1hohOQhohOA4jlQA5jlC4j0QC5j0DMh2QDLh2BoBQQA4ApAJBUQAigWAigTQCzhkBcBFQBHA1gKB/QAVgOAXgMQB1g/A+AvQA/AwgcCBQgcCBhmCHQhnCIh0A+Qh1A+g/gvQgOgKgJgPQgigzAXhlQAbiABniHQBShuBdg+AEcDnQh/CSiLBNQiyBlhchGQgdgWgQgjQghhMAhiIQAvjHCgjTQB/isCNhi");
	this.shape_4.setTransform(6.5008,41.3349);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AsIJPQhohOA4jlQA5jlC4j0QC5j0DMh2QDLh2BoBQQA4ApAJBUQAigWAigTQCzhkBcBFQBHA1gKB/QAVgOAXgMQB1g/A+AvQA/AwgcCBQgcCBhmCHQhnCIh0A+Qh1A+g/gvQgOgKgJgPQgUgfAAgwQAAghAJgoQAbiABniHQBShuBdg+QhdA+hSBuQhnCHgbCAQgJAoAAAhQAAAwAUAfQh/CSiLBNQiyBlhchGQgdgWgQgjQgQgmAAg1QAAg1AQhEQAvjHCgjTQB/isCNhiQiNBih/CsQigDTgvDHQgQBEAAA1QAAA1AQAmQhUBJhYAzQh5BGhXAAQg5AAgqgfgAkpGsIAAAAg");
	this.shape_5.setTransform(6.5008,41.3349);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(8,1,1).p("Am8DHQhwAIhkgMQjpgdglh9Qgjh7C1iWQC4iUEmhVQEnhUDpAdQDqAdAjB+QATBDgrBIQApADAnAFQDKAcAgBuQAaBVhVBeQAZACAaAEQCDAVAVBKQAOAygnA4QgUAcgiAdQgFAEgFAEQhiBQibAuQhiAbhWAEQg6ADg0gIQg/gLgmgWQgogZgLgmQgDgHgBgGQgCgLACgLQgMACgMADQgHABgIACQgWAEgWADQiNAUh6gRQjLgbgghvQgJgjAJgmQAShRBshYQCdiBD+hJQDPg8CrAGACJGIQADgtAtgyQAQgQASgQQBkhYCjgtQCFgmBvAF");
	this.shape_6.setTransform(1.4445,-9.9546);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AG8IRIgbgBQBWgEBigcQCbgtBihQQgRA/hmAsQhyAzifAAIgSAAgAEzIKQg/gKgmgXQgogYgLgnIgEgMQgBgLABgLQADguAtgxIAIgGQBuhKCngZQCIgWBuATQAZAFAZAHQB4AiASBHQgUAbgiAdIgKAJQhiBQibAtQhiAchWAEIgaABQgrAAgpgHgACbHUQg6gcgdghIAsgIIAPgCQALAIANAJIAEAMQALAnAoAYQgagJgZgMgAjDGaQjLgbgghwQgJgjAJglQAShRBshYQCdiCD+hJQC8g2CeAAIABAAIAAAAIAaAAIAFAAIgFAAIgaAAIAAAAIgBAAQieAAi8A2Qj+BJidCCQhsBYgSBRQhwAIhkgNQjpgcglh9Qgjh8C1iWQC4iUEmhUQEmhVDqAdQDqAdAjB+QATBDgrBIQApADAnAFQDKAcAgBvQAaBUhVBfQhvgGiFAmQijAuhkBYQgSAPgQARQgtAxgDAuIgYAFIgPACIgsAIQhMALhHAAQg8AAg4gIg");
	this.shape_7.setTransform(0.0096,-9.9375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},3).to({state:[{t:this.shape_5},{t:this.shape_4}]},3).to({state:[{t:this.shape_3},{t:this.shape_2}]},3).to({state:[{t:this.shape_7},{t:this.shape_6}]},3).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.8,-109.9,412.8,250);


(lib.background = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// portal
	this.portal_mc = new lib.portal_1();
	this.portal_mc.name = "portal_mc";
	this.portal_mc.setTransform(5470.8,-552.6);

	this.timeline.addTween(cjs.Tween.get(this.portal_mc).wait(1));

	// pitchfork
	this.pitchfork_mc = new lib.pitchfork();
	this.pitchfork_mc.name = "pitchfork_mc";
	this.pitchfork_mc.setTransform(2960.7,-563.1);

	this.timeline.addTween(cjs.Tween.get(this.pitchfork_mc).wait(1));

	// halo
	this.halo_mc = new lib.halo();
	this.halo_mc.name = "halo_mc";
	this.halo_mc.setTransform(941.7,-549.65);

	this.timeline.addTween(cjs.Tween.get(this.halo_mc).wait(1));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1).p("ECWAhUXMEsAAAAMAAACovMksAAAAMkr/AAAECWAhUXMAAACovEiV/hUXMAAACovMksAAAAMAAAiovMEsAAAAMEr/AAA");
	this.shape.setTransform(2880,-540);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#ACF1FF","#FFFFFF"],[0,1],-959.9,0,960,0).s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_1.setTransform(960,-540);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#690000","#000000"],[0,1],-959.9,0,960,0).s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_2.setTransform(4800,-540);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFFFF","#690000"],[0,1],-959.9,0,960,0).s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_3.setTransform(2880,-540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.background, new cjs.Rectangle(-1,-1081,5762,1082), null);


// stage content:
(lib.king_final_project_REDO = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		document.addEventListener("keydown", handleKeyDown);
		document.addEventListener("keyup", handleKeyUp);
		
		var root = this;
		var speed = 100
		
		function handleKeyDown(event){
			console.log(root.eyeball_mc.scaleX);
			if (root.eyeball_mc.currentFrame == 9){
				root.eyeball_mc.gotoAndPlay("flying");
			}
			
			if (event.keyCode == 39){
				root.eyeball_mc.scaleX = 1;
				root.background_mc.x = root.background_mc.x - speed;
			
			}
			if (event.keyCode == 37){
				root.eyeball_mc.scaleX = -1;
				root.background_mc.x = root.background_mc.x + speed;
			}
		}
		
		function handleKeyUp(event) {
			root.eyeball_mc.gotoAndPlay("standing");
		}
		
		this.background_mc.halo_mc.addEventListener("click",handleClickHalo);
		
		function handleClickHalo(event){
			var shatter_snd = createjs.Sound.play("shatter");
			root.background_mc.halo_mc.play();
		}
		
		this.background_mc.pitchfork_mc.addEventListener("click",handleClickPitchfork);
		
		function handleClickPitchfork(event){
			var shing_snd = createjs.Sound.play("shing");
			root.background_mc.pitchfork_mc.play();
		}
		
		this.background_mc.portal_mc.addEventListener("click",handleClickPortal);
		
		function handleClickPortal(event){
			var portal_snd = createjs.Sound.play("portal");
			root.background_mc.portal_mc.play();
		}
		
		this.play_btn.addEventListener("click",handleClickPlayButton);
		
		function handleClickPlayButton(event){
			var music_snd = createjs.Sound.play("music");
			root.play();
		}
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// text
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(266.85,68.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

	// buttons
	this.instance_1 = new lib.sparkles();
	this.instance_1.setTransform(1653.05,363.95,0.3298,0.3298);

	this.instance_2 = new lib.sparkles();
	this.instance_2.setTransform(1617.5,721.7,0.2118,0.2118);

	this.instance_3 = new lib.sparkles();
	this.instance_3.setTransform(1418.05,748.55,0.303,0.303);

	this.instance_4 = new lib.sparkles();
	this.instance_4.setTransform(617.25,657.2,0.2397,0.2397);

	this.instance_5 = new lib.sparkles();
	this.instance_5.setTransform(566.65,747.05,0.3624,0.3624);

	this.instance_6 = new lib.sparkles();
	this.instance_6.setTransform(285.35,349.3,0.303,0.303);

	this.play_btn = new lib.play_btn();
	this.play_btn.name = "play_btn";
	this.play_btn.setTransform(1507.1,540);

	this.play_btn_1 = new lib.play_btn();
	this.play_btn_1.name = "play_btn_1";
	this.play_btn_1.setTransform(412.9,540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.play_btn_1},{t:this.play_btn},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).to({state:[]},1).wait(1));

	// flying
	this.eyeball_mc = new lib.flying();
	this.eyeball_mc.name = "eyeball_mc";
	this.eyeball_mc.setTransform(452.15,592.2,1,1,0,0,0,117.5,15.1);
	this.eyeball_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.eyeball_mc).wait(1).to({_off:false},0).wait(1));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EiV/hblMEr/AAAMAAAC3LMkr/AAAg");
	this.shape.setTransform(960,540);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#33CCFF").s().p("EiV/BbmMAAAi3LMEr/AAAMAAAC3Lg");
	this.shape_1.setTransform(960,540);

	this.background_mc = new lib.background();
	this.background_mc.name = "background_mc";
	this.background_mc.setTransform(2880,540,1,1,0,0,0,2880,-540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.background_mc}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(959,492.9,4801.5,634.3000000000001);
// library properties:
lib.properties = {
	id: 'E565C1A83AA2F5479CEB60DBFE5E5BA4',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_1.png?1715734420428", id:"CachedBmp_1"},
		{src:"sounds/music.mp3?1715734420428", id:"music"},
		{src:"sounds/_new.mp3?1715734420428", id:"_new"},
		{src:"sounds/portal.mp3?1715734420428", id:"portal"},
		{src:"sounds/shatter.mp3?1715734420428", id:"shatter"},
		{src:"sounds/shing.mp3?1715734420428", id:"shing"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['E565C1A83AA2F5479CEB60DBFE5E5BA4'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;