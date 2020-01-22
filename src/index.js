function showVersion() {
    document.write(
        'We are using node ' + process.versions.node +
        'Chrome ' + process.versions.chrome  +
        'and Electron ' + process.versions.electron
    )
}