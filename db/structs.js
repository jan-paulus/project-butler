/**
 * @class Result (!abstract!)
 * Defines a database basic result
 */
class Result {
    constructor(){
        this.messages = {
            'info': [],
            'error': [],
            'warn': []
        };
        this.resultData = null;
    }

    isError() {
        return false;
    }

    data() {
        return this.resultData;
    }

    aliasesPreprocess(aliasesArray) {
        return aliasesArray;
    }
}

class AddedResult extends Result {
    constructor() {
        super();
    }

    hasWarnings() {
        return this.messages.warn.length > 0;
    }

    addWarning(text) {
        this.messages.warn.push({text: text});
    }

    saveProjectDetails(projectDetails) {
        this.resultData = projectDetails;
        return this;
    }
}

/**
 * Represents an error as result
 */
class ErrorResult extends Result {
    constructor() {
        super();
    }

    isError() {
        return true;
    }

    getErrors() {
        return this.messages.error;
    }

    addError(text, childMessages) {
        if (arguments.length===1) {
            this.messages.error.push({text: text});
        } else {
            childMessages = childMessages && !Array.isArray(childMessages) ? [childMessages] : childMessages;
            this.messages.error.push({text: text, childMessages: childMessages});
        }

        return this;
    }
}

class ExactProjectResult extends Result {
    /**
     * @param {Object} project - the project details object
     */
    constructor(project) {
        super();
        this.resultData = project; /** { absPath: string, directoryName: string} */
    }

    getPath() {
        return this.data().absPath;
    }
}

class ProjectListResult extends Result {
    /**
     * @param {Array<Object>} listOfProjects
     */
    constructor(listOfProjects) {
        super();
        this.resultData = listOfProjects;
    }

    get title() {
        return 'Available projects:';
    }
}

class SearchProjectListResult extends ProjectListResult {
    constructor(projectListResult, { searchString }) {
        super(projectListResult.resultData);
        this.searchString = searchString;
    }

    get title() {
        return `Found multiple matches for '${this.searchString}', please specify:`;
    }

    aliasesPreprocess(aliasesArray) {
        return aliasesArray.filter(sAlias => {
            return sAlias.includes(this.searchString);
        });
    }
}

class ProjectProposalResult extends ProjectListResult {
    /**
     * @param {Array<Object>} listOfProjects
     * @param {String} searchString - The string the project proposals are based on
     */
    constructor (listOfProjects, searchString) {
        super(listOfProjects);
    }
}

class CommandWrapper {
    constructor (command) {
        this.command = command;
    }

    toString() {
        return this.command;
    }
}

module.exports = {
    ErrorResult: ErrorResult,
    ProjectListResult: ProjectListResult,
    SearchProjectListResult: SearchProjectListResult,
    ProjectProposalResult: ProjectProposalResult,
    ExactProjectResult: ExactProjectResult,
    AddedResult: AddedResult,
    CommandWrapper: CommandWrapper,
};